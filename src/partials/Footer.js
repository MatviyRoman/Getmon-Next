"use client"

import { useState } from "react";
import "./Footer.css";
import Link from "next/link";
import Image from 'next/image';

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

            {/* 2️⃣ 6-КОЛОНОЧНА СЕКЦІЯ */}
            {/* <div className="footer-grid">
        <div><h3>Категорія 1</h3><ul><li><a href="#">Посилання 1</a></li></ul></div>
        <div><h3>Категорія 2</h3><ul><li><a href="#">Посилання 2</a></li></ul></div>
        <div><h3>Категорія 3</h3><ul><li><a href="#">Посилання 3</a></li></ul></div>
        <div><h3>Категорія 4</h3><ul><li><a href="#">Посилання 4</a></li></ul></div>
        <div><h3>Категорія 5</h3><ul><li><a href="#">Посилання 5</a></li></ul></div>
        <div><h3>Категорія 6</h3><ul><li><a href="#">Посилання 6</a></li></ul></div>
      </div> */}

            {/* 3️⃣ COPYRIGHT + ПОСИЛАННЯ */}
            {/* <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Всі права захищені.</p>
        <nav>
          <a href="#">Головна</a>
          <a href="#">Про нас</a>
          <a href="#">Контакти</a>
          <a href="#">Політика конфіденційності</a>
        </nav>
      </div> */}
        </footer>
    );
}