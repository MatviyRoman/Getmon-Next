"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import MobileMenuToggle from '@/components/header/MenuToggle';
import { companyInfoData } from '@/data/companyInfoData';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const { companyInfo } = companyInfoData;
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setActiveMenu(null);
    };

    const hideMenu = () => {
        setIsOpen(false);
    };

    const toggleSubmenu = (menuName) => {
        if (window.innerWidth <= 768) { // For mobile devices
            setActiveMenu(activeMenu === menuName ? null : menuName);
        }
        // For desktop devices do nothing - it will work through :hover
    };

    const menuItems = [
        {
            title: "Klimatyzacja",
            href: "/klimatyzacja-wroclaw",
            link: "/klimatyzacja-wroclaw/",
            submenu: [
                { title: "Klimatyzacja Wrocław", href: "/klimatyzacja-wroclaw/" },
                { title: "Ścienna (split)", href: "/klimatyzacja-scienna-split-wroclaw/" },
                { title: "Multi Split", href: "/klimatyzacja-multi-split-wroclaw/" },
                { title: "Kanałowa", href: "/klimatyzacja-kanalowa-wroclaw/" },
                { title: "Kasetonowa", href: "/klimatyzacja-kasetonowa-wroclaw/" },
                { title: "Przypodłogowo-podsufitowa", href: "/klimatyzacja-przypodlogowo-podsufitowa-wroclaw/" },
                { title: "Przenośna", href: "/klimatyzacja-przenosna-wroclaw/" },
                { title: "Rodzaje klimatyzacji", href: "/rodzaje-klimatyzacji/" }
            ]
        },
        {
            title: "Wentylacja",
            href: "/wentylacja-wroclaw/",
            link: "/wentylacja-wroclaw/",
            submenu: null
        },
        {
            title: "Pompy ciepła",
            href: "/pompy-ciepla-wroclaw/",
            link: "/pompy-ciepla-wroclaw/",
            submenu: null
        },
        {
            title: "Monitoring",
            href: "#",
            link: "/montaz-monitoringu-wroclaw/",
            submenu: [
                { title: "O monitoringu", href: "/montaz-monitoringu-wroclaw/" },
                { title: "Cyfrowy IP", href: "/montaz-monitoringu-cyfrowego-ip-wroclaw/" },
                { title: "Analogowy", href: "/montaz-monitoringu-analogowego-wroclaw/" },
                // { title: "Hybrydowy", href: "/montaz-monitoringu-hybrydowego-wroclaw/" }
            ]
        },
        {
            title: "Systemy alarmowe",
            href: "#",
            link: "/systemy-alarmowe-wroclaw/",
            submenu: [
                { title: "O systemach alarmowych", href: "/systemy-alarmowe-wroclaw/" },
                { title: "Przewodowe", href: "/systemy-alarmowe-przewodowe-wroclaw/" },
                { title: "Bezprzewodowe", href: "/systemy-alarmowe-bezprzewodowe-wroclaw/" },
                // { title: "Rodzaje kamer do monitoringu", href: "/rodzaje-kamer-do-monitoringu/" }
            ]
        },
        {
            title: "Blog",
            href: "/blog/",
            link: "/blog/",
            submenu: null
        },
        // {
        //     title: "Galeria",
        //     href: "#",
        //     submenu: [
        //         { title: "Anteny", href: "/galeria-anteny/" },
        //         { title: "Klimatyzacja", href: "/galeria-klimatyzacja/" },
        //         { title: "Monitoring", href: "/galeria-monitoring/" }
        //     ]
        // },
        // {
        //     title: "Kontakt",
        //     href: "/kontakt/",
        //     submenu: null
        // }
    ];


    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>

                {/* Logo */}
                <div className={styles.logo}>
                    <Link href="/" onClick={hideMenu}>
                        <Image
                            src={companyInfo.logo}
                            alt={companyInfo.name}
                            width={140}
                            height={30}
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile contacts */}
                <nav className={styles.navMobile}>
                    <ul className={styles['contacts__mobile']}>
                        <li className={styles.linkWrapper}>
                            <Link className={styles.link} href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}>
                                <Image
                                    src="/img/hugeicons_hold-phone.svg"
                                    alt={companyInfo.name}
                                    width={32}
                                    height={32}
                                    priority
                                />
                                {companyInfo.phone_short}
                            </Link>
                        </li>
                        <li className={styles.linkWrapper}>
                            <Link className={styles.link} href={`mailto:${companyInfo.mail}`}>{companyInfo.mail}</Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Menu */}
                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles['nav__top']}>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.submenu ? styles.hasSubmenu : styles.hasLink} ${activeMenu === item.title ? styles.submenuActive : ''}`}
                                onMouseEnter={() => item.submenu && window.innerWidth > 991 && setActiveMenu(item.title)}
                                onMouseLeave={() => item.submenu && window.innerWidth > 991 && setActiveMenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`${styles.link} ${pathname.startsWith(item.link) ? styles.active : ''}`}
                                    onClick={(e) => {
                                        if (item.submenu && window.innerWidth <= 991) {
                                            e.preventDefault();
                                            toggleSubmenu(item.title);
                                        } else {
                                            toggleMenu();
                                        }
                                    }}
                                >
                                    {item.title}
                                    {item.submenu && (
                                        <Image
                                            className={styles.arrow}
                                            src="/img/arrow-down.svg"
                                            alt="arrow down"
                                            width={12}
                                            height={12}
                                        />
                                    )}
                                </Link>

                                {item.submenu && (
                                    <ul className={styles.submenu}>
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li
                                                className={styles.linkWrapper}
                                                key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className={styles.link}
                                                    onClick={toggleMenu}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop contacts */}
                    <ul className={styles['nav__bottom']}>
                        <li className={styles.linkWrapper}>
                            <Link className={styles.link} href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}>{companyInfo.phone}</Link>
                        </li>
                        <li className={styles.linkWrapper}>
                            <Link className={styles.link} href={`mailto:${companyInfo.mail}`}>{companyInfo.mail}</Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile menu toggle */}
                <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;