import React, { useState, useEffect } from 'react';
import styles from './FooterNavigation.module.css';
import Image from 'next/image';
import Link from "next/link";
import { companyInfoData } from '@/data/companyInfoData';
import { footerNavigationData } from '@/data/footerNavigationData';

const FooterNavigation = () => {
    const [openSections, setOpenSections] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Цей код виконується тільки на клієнті
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Ініціалізація при завантаженні
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSection = (index) => {
        setOpenSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const { companyInfo } = companyInfoData;
    const { menuSections } = footerNavigationData;

    return (
        <div className={styles.footerNav}>
            <div className={`${styles.container} container`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src={companyInfo.logo}
                            alt={`${companyInfo.name} Logo`}
                            width={140}
                            height={30}
                        />
                    </Link>
                </div>
            </div>

            <div className={styles.footerMenu}>
                <div className={`${styles.container} container`}>
                    <div className={styles.navColumns}>

                        {/* Інформація про компанію та контакти */}
                        {/* <div className={styles.navColumn}>
                            <h3 className={styles.columnTitle}>INFORMACJE O FIRMIE</h3>
                            <ul className={styles.navList}>
                                <li>{companyInfo.address}</li>
                            </ul>

                            <h3 className={styles.columnTitle}>LĄCZNOŚĆ</h3>
                            <ul className={styles.navList}>
                                {companyInfo.contacts.map((contact, index) => (
                                    <li key={index}>
                                        <a href={contact.url} className={index === companyInfo.contacts.length - 1 ? styles.email : ''}>
                                            {contact.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Меню */}
                        {menuSections.map((section, index) => (
                            <div key={index} className={styles.navColumn}>
                                <h3
                                    className={styles.columnTitle}
                                    onClick={index > 1 && isMobile ? () => toggleSection(index) : undefined}
                                    aria-expanded={index > 1 && isMobile ? openSections[index] : undefined}
                                    aria-controls={index > 1 ? `section-${index}` : undefined}
                                >
                                    {section.title}
                                    {/* Показуємо іконку тільки для секцій з індексом > 1 на мобільних */}
                                    {index > 1 && isMobile && (
                                        <span className={`${styles.toggleIcon} ${openSections[index] ? styles.rotated : ''}`}>
                                            <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.35 0.35L3.35 3.35L6.35 0.35" stroke="currentColor" strokeWidth="1" />
                                            </svg>
                                        </span>
                                    )}
                                </h3>
                                <ul
                                    id={index > 1 ? `section-${index}` : undefined}
                                    className={styles.navList}
                                    style={{
                                        display: index > 1 && isMobile
                                            ? openSections[index] ? 'flex' : 'none'
                                            : 'block'
                                    }}
                                >
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className={styles.navListItem}>
                                            <Link href={link.url} className={styles.navLink}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNavigation;