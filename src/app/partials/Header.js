"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/"><img src="/img/logo.svg" alt="GetMon Logo" width="140" height="30" /></Link>
                </div>
                <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
                    <ul>
                        <li>
                            <Link href="/">KlimatyzacJa</Link>
                        </li>
                        <li>
                            <Link href="/">Monitoring</Link>
                        </li>
                        <li>
                            <Link href="/">Systemy alarmowe</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="menu-toggle__bar"></span>
                    <span className="menu-toggle__bar"></span>
                    <span className="menu-toggle__bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
