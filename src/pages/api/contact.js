import nodemailer from 'nodemailer';
import { companyInfoData } from '@/data/companyInfoData';

console.log('companyInfoData', companyInfoData);

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_TARGET_TYPE = process.env.TELEGRAM_TARGET_TYPE; // 'group' або 'user'
const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;
const TELEGRAM_USER_ID = process.env.TELEGRAM_USER_ID;

const getChatTargets = () => {
    const value = TELEGRAM_TARGET_TYPE === 'group' ? TELEGRAM_GROUP_ID : TELEGRAM_USER_ID;
    if (!value) return [];
    return value.includes(',') ? value.split(',').map(v => v.trim()) : [value.trim()];
};

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    console.log(req.body);

    const { name, email, phone, message, recaptchaToken } = req.body;
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    // === ✅ reCAPTCHA verification
    if (RECAPTCHA_SECRET_KEY) {
        const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });

        const verification = await verifyRes.json();

        if (!verification.success || verification.score < 0.5) {
            return res.status(400).json({ success: false, error: "Failed captcha verification" });
        }
    }

    // const msg = `📩 Nowy formularz kontaktowy:\n👤 Imię: ${name}\n📧 Email: ${email}\n📱 Telefon: ${phone}\n💬 Wiadomość: ${message}`;

    let msg = '📩 Nowy formularz kontaktowy:\n';

    if (name) msg += `👤 Imię: ${name}\n`;
    if (email) msg += `📧 Email: ${email}\n`;
    if (phone) msg += `📱 Telefon: ${phone}\n`;
    if (message) msg += `💬 Wiadomość: ${message}`;

    // === 1. Відправка в Telegram
    const chatTargets = getChatTargets();

    if (TELEGRAM_TOKEN && chatTargets.length > 0) {

        console.log(chatTargets);

        for (const chatId of chatTargets) {
            await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: msg,
                    parse_mode: 'HTML',
                }),
            });
        }
    }

    // === 2. Відправка Email
    // check if SMTP settings are provided

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const MAIL_TO = companyInfoData.companyInfo.mail || process.env.NEXT_PUBLIC_DEFAULT_COMPANY_MAIL;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: process.env.SMTP_SECURE === 'true', //! always set to false
            },
        });

        await transporter.sendMail({
            from: `"Kontaktformularz" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: [ process.env.SMTP_TO, process.env.SMTP_TO_TEST, process.env.NEXT_PUBLIC_DEFAULT_COMPANY_MAIL ].filter(Boolean),
            subject: `Nowa wiadomość od ${name}`,
            text: msg,
        });
    }

    return res.status(200).json({ success: true });
}
