// components/icon/StarRating.js
import React from 'react';
import styles from './StarRating.module.css';

const StarRating = ({ rating = 0 }) => {
    // Функція для нормалізації рейтингу
    const normalizeRating = (value) => {
        if (typeof value === 'string') {
            // Спроба конвертувати рядок у число
            const num = parseFloat(value);
            return isNaN(num) ? 0 : Math.min(5, Math.max(0, num));
        }
        if (typeof value === 'number') {
            return Math.min(5, Math.max(0, value));
        }
        return 0;
    };

    const normalizedRating = normalizeRating(rating);

    return (
        <div className={styles.starsContainer}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={index < normalizedRating ? styles.filledStar : styles.emptyStar}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;