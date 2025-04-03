// import React from 'react';
import styles from "./StatsBlock.module.css";
import Image from 'next/image';

const StatsBlock = ({ stats }) => {
    return (
        <>
            {stats.map((stat, index) => (
                <div className={styles['stats-block']} key={index}>
                    <div className={styles['stat-item']}>
                        <div className={styles['stat-line']}></div>
                        <div className={styles['stat-icon']}></div>
                        <p className={styles['stat-item-value']}>{stat.value}</p>
                        <h2 className={styles['stat-item-title']}>{stat.title}</h2>
                        <Image className={styles['stat-logo']} src="/img/stat-logo.svg" width={68} height={51} alt={stat.title} />
                    </div>
                    <div className={styles['stat-description']}>
                        <p>{stat.description}</p>
                        <img className={styles['stat-line']} src="/img/line-mobile.svg" alt="line" />
                    </div>
                </div>
            ))}
        </>
    );
};

export default StatsBlock;