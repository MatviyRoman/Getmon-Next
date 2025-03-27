"use client"

import { useState } from "react";
import "./Footer.css";
import Link from "next/link";
import Image from 'next/image';
import FooterNavigation from '@/components/sections/FooterNavigation';
import FooterSeoLinks from '@/components/sections/FooterSeoLinks';

export default function Footer() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", agree: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.agree) {
            alert("Musisz zaakceptować Politykę Prywatności!");
            return;
        }
        console.log("form send:", form);
    };

    return (
        <footer className="footer">
            <div className="container">
                <h2 className="title">Prosimy o kontakt w celu otrzymania bezpłatnej wyceny.</h2>
            </div>
            <div className="container">
                <div className="footer-form">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="footer-form-left">
                            <input className="input" type="text" name="name" placeholder="Nazwa *" required onChange={handleChange} />
                            <input className="input" type="email" name="email" placeholder="Email *" required onChange={handleChange} />
                            <input className="input" type="tel" name="phone" placeholder="Telefon *" required onChange={handleChange} />
                        </div>
                        <div className="footer-form-center">
                            <textarea className="textarea" name="message" placeholder="Wiadomość" rows="4" onChange={handleChange}></textarea>
                        </div>
                        <div className="footer-form-right">
                            <img className="img" src="/img/air-conditioner.svg" alt="Klimatyzacja" />
                            {/* <Image className="img" src="/img/air-conditioner.svg" width="234" height="177" alt="Klimatyzacja" priority /> */}
                        </div>
                        <div className="footer-form-bottom">
                            <div className="footer-checkbox">
                                <input className="checkbox" type="checkbox" name="agree" id="agree" onChange={handleChange} />
                                <label className="label" htmlFor="agree">Wyrażam zgodę na <Link href="/polityka-prywatnosci" className="privacy-link">Politykę Prywatności.</Link></label>
                            </div>
                            <button className="btn btn-primary" type="submit">Wysłać</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* NAVIGATION */}
            <FooterNavigation />

            {/* COPYRIGHT */}
            <div className="footerCopyright">
                <div className="container">
                    <p>
                        © Copyright {new Date().getFullYear()} Getmon.  Nowoczesne systemy, niezawodny komfort.
                        <Link
                            href="/polityka-prywatnosci/"
                            className="privacyLink"
                        >
                            Polityka prywatności
                        </Link>
                    </p>
                </div>
            </div>

            {/* SEO LINKS */}
            <FooterSeoLinks />
        </footer>
    );
}