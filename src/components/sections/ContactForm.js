import { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
    const recaptchaRef = useRef(null);
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        if (recaptchaSiteKey) {
            setIsRecaptchaReady(true);
        }
    }, []);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.agree) {
            alert("Musisz zaakceptować Politykę Prywatności!");
            return;
        }

        let recaptchaToken = null;

        if (recaptchaRef.current) {
            recaptchaToken = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...form, recaptchaToken }),
            });

            const data = await res.json();

            if (data.success) {
                alert("Wiadomość została wysłana!");
                setForm({ name: "", email: "", phone: "", message: "", agree: false });
                setIsSubmitted(true); // ✅ блокуємо кнопку
                setTimeout(() => setIsSubmitted(false), 10000);
            } else {
                console.error("Błąd:", err);
                alert("Błąd podczas wysyłania wiadomości.");
            }

        } catch (err) {
            console.error("Błąd:", err);
            alert("Wystąpił błąd.");
        }
    };

    return (
        <div className="container">
            <div className={styles.footerForm}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.footerFormLeft}>
                        <input className={styles.input} type="text" name="name" placeholder="Nazwa *" required onChange={handleChange} value={form.name} />
                        <input className={styles.input}  type="email" name="email" placeholder="Email *" required onChange={handleChange} value={form.email} />
                        <input className={styles.input}  type="tel" name="phone" placeholder="Telefon *" required onChange={handleChange} value={form.phone} />
                    </div>
                    <div className={styles.footerFormCenter}>
                        <textarea className={styles.textarea}  name="message" placeholder="Wiadomość" rows="4" onChange={handleChange} value={form.message}></textarea>
                    </div>
                    <div className={styles.footerFormRight}>
                        <img className={styles.img} src="/img/air-conditioner.svg" alt="Klimatyzacja" />
                        {/* <Image className={styles.img} src="/img/air-conditioner.svg" width="234" height="177" alt="Klimatyzacja" loading="lazy" priority={false} placeholder="blur" unoptimized={true} /> */}
                    </div>
                    <div className={styles.footerFormBottom}>
                        <div className={styles.footerCheckbox}>
                            <input className={styles.checkbox} type="checkbox" name="agree" id="agree" checked={form.agree} onChange={handleChange} />
                            <label className={styles.label} htmlFor="agree">Wyrażam zgodę na <Link href="/polityka-prywatnosci" className={styles['privacy-link']}>Politykę Prywatności.</Link></label>
                        </div>

                        {isRecaptchaReady && (
                            <ReCAPTCHA
                                sitekey={recaptchaSiteKey}
                                size="invisible"
                                ref={recaptchaRef}
                            />
                        )}

                        <button className="btn btn-primary" type="submit" disabled={isSubmitted}>Wysłać</button>

                        {isSubmitted && <p className={styles.success}>Dziękujemy! Wiadomość została wysłana.</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;