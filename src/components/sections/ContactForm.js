import { React, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { companyInfoData } from '@/data/companyInfoData';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", agree: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // console.log(companyInfoData)
    // const contacts = companyInfoData.companyInfo.contacts;
    // console.log(contacts);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.agree) {
            alert("Musisz zaakceptować Politykę Prywatności!");
            return;
        }
        console.log("form send:", form);
    };

    return (
        <div className="container">
            <div className={styles.footerForm}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.footerFormLeft}>
                        <input className={styles.input} type="text" name="name" placeholder="Nazwa *" required onChange={handleChange} />
                        <input className={styles.input}  type="email" name="email" placeholder="Email *" required onChange={handleChange} />
                        <input className={styles.input}  type="tel" name="phone" placeholder="Telefon *" required onChange={handleChange} />
                    </div>
                    <div className={styles.footerFormCenter}>
                        <textarea className={styles.textarea}  name="message" placeholder="Wiadomość" rows="4" onChange={handleChange}></textarea>
                    </div>
                    <div className={styles.footerFormRight}>
                        <img className={styles.img} src="/img/air-conditioner.svg" alt="Klimatyzacja" />
                        {/* <Image className={styles.img} src="/img/air-conditioner.svg" width="234" height="177" alt="Klimatyzacja" loading="lazy" priority={false} placeholder="blur" unoptimized={true} /> */}
                    </div>
                    <div className={styles.footerFormBottom}>
                        <div className={styles.footerCheckbox}>
                            <input className={styles.checkbox} type="checkbox" name="agree" id="agree" onChange={handleChange} />
                            <label className={styles.label} htmlFor="agree">Wyrażam zgodę na <Link href="/polityka-prywatnosci" className={styles['privacy-link']}>Politykę Prywatności.</Link></label>
                        </div>
                        <button className="btn btn-primary" type="submit">Wysłać</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;