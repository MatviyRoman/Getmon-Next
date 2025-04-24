"use client";

import styles from './MenuToggle.module.css';

const MobileMenuToggle = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className={`${styles['menu-toggle']} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span className={styles['menu-toggle__bar']}></span>
            <span className={styles['menu-toggle__bar']}></span>
            <span className={styles['menu-toggle__bar']}></span>
        </button>
    );
};

export default MobileMenuToggle;