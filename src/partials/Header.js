"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setActiveMenu(null);
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
            href: "#",
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
            title: "Monitoring",
            href: "#",
            submenu: [
                { title: "O monitoringu", href: "/montaz-monitoringu-wroclaw/" },
                { title: "Cyfrowy IP", href: "/montaz-monitoringu-cyfrowego-ip-wroclaw/" },
                { title: "Analogowy", href: "/montaz-monitoringu-analogowego-wroclaw/" },
                { title: "Hybrydowy", href: "/montaz-monitoringu-hybrydowego-wroclaw/" }
            ]
        },
        {
            title: "Systemy alarmowe",
            href: "#",
            submenu: [
                { title: "O systemach alarmowych", href: "/systemy-alarmowe-wroclaw/" },
                { title: "Przewodowe", href: "/systemy-alarmowe-przewodowe-wroclaw/" },
                { title: "Bezprzewodowe", href: "/systemy-alarmowe-bezprzewodowe-wroclaw/" },
                { title: "Rodzaje kamer do monitoringu", href: "/rodzaje-kamer-do-monitoringu/" }
            ]
        },
        {
            title: "Blog",
            href: "/blog",
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
                <div className={styles.logo}>
                    <Link href="/" onClick={toggleMenu}>
                        <Image
                            src="/img/logo.svg"
                            alt="GetMon Logo"
                            width={140}
                            height={30}
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile contacts */}
                <nav className={styles.navMobile}>
                    <ul className={styles['nav__bottom']}>
                        <li>
                            <Link className={styles.link} href="tel:+48 884 884 823">
                                <Image
                                    src="/img/hugeicons_hold-phone.svg"
                                    alt="GetMon Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                                884 884 823
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="mailto:biuro@getmon.pl">biuro@getmon.pl</Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Menu */}
                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles['nav__top']}>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.submenu ? styles.hasSubmenu : ''} ${activeMenu === item.title ? styles.submenuActive : ''} linkWrapper`}
                                onMouseEnter={() => item.submenu && window.innerWidth > 991 && setActiveMenu(item.title)}
                                onMouseLeave={() => item.submenu && window.innerWidth > 991 && setActiveMenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={styles.link}
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
                            <Link className={styles.link} href="tel:+48 884 884 823">+48 884 884 823</Link>
                        </li>
                        <li className={styles.linkWrapper}>
                            <Link className={styles.link} href="mailto:biuro@getmon.pl">biuro@getmon.pl</Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className={`${styles['menu-toggle']} ${isOpen ? styles.active : ''}`} // Use the styles from the CSS module
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles['menu-toggle__bar']}></span>
                    <span className={styles['menu-toggle__bar']}></span>
                    <span className={styles['menu-toggle__bar']}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;