'use client';

import Link from 'next/link';
import styles from './CategoryFilters.module.css'; // Стилі для цього компоненту

export default function CategoryFilters({ categoryId = null }) {
    return (
        <div className={styles.categoryFilters}>
            <div className={`${styles.container} container`}>
                <Link
                    href="/blog"
                    className={`${styles.categoryButton} ${!categoryId ? styles.active : ''}`}
                >
                    Wszystkie
                </Link>
                <Link
                    href="/blog?categoryID=1"
                    className={`${styles.categoryButton} ${categoryId === 1 ? styles.active : ''}`}
                >
                    Nasze praktyki
                </Link>
                <Link
                    href="/blog?categoryID=2"
                    className={`${styles.categoryButton} ${categoryId === 2 ? styles.active : ''}`}
                >
                    O naszej firmie
                </Link>
                <Link
                    href="/blog?categoryID=3"
                    className={`${styles.categoryButton} ${categoryId === 3 ? styles.active : ''}`}
                >
                    Część teoretyczna procesów
                </Link>
            </div>
        </div>
    );
}
