"use client"

import React from "react";
import styles from "@/components/footer/Footer.module.css";
import ContactForm from '@/components/sections/ContactForm';
import FooterNavigation from '@/components/footer/FooterNavigation';
import FooterCopyright from '@/components/footer/FooterCopyright';
import FooterSeoLinks from '@/components/footer/FooterSeoLinks';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.title}>
                    Prosimy o kontakt w celu otrzymania bezpłatnej wyceny.
                </h2>
            </div>

            {/* CONTACT FORM */}
            <ContactForm />

            {/* NAVIGATION */}
            <FooterNavigation />

            {/* COPYRIGHT */}
            <FooterCopyright />

            {/* SEO LINKS */}
            <FooterSeoLinks />
        </footer>
    );
}