import React from 'react';
import '@/app/globals.css';
import styles from './TopSection.module.css';
import Image from 'next/image';

const TopSection = () => {
    const services = [
        {
            title: "MONTAŻ SYSTEMÓW KLIMATYZACJI",
            description: "Jesteśmy zespołem profesjonalistów, którzy zajmują się kompleksową usługa klimatyzacji.",
            img: '/img/conditioner.svg'
        },
        {
            title: "MONTAŻ SYSTEMÓW MONITORINGU",
            description: "Podejmujemy się budowy monitoringu od a do z.",
            img: '/img/camera.svg'
        },
        {
            title: "MONTAŻ SYSTEMÓW ALARMOWYCH",
            description: "Posiadamy szeroki asortyment systemów alarmowych dostosowanych do potrzeb Klienta.",
            img: '/img/ajax.svg'
        }
    ];

    return (
        <section className={styles.topSection}>
            <div className="container">
                <div className={styles.header}>
                    <h1>NOWOCZESNE SYSTEMY, NIEZAWODNY <span className={styles.span}>KOMFORT</span></h1>
                </div>
            </div>
            <div className="container">
                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.wrapper}>
                                <div className={styles.top}>
                                    <h2 className={styles.title}>{service.title}</h2>
                                    <p className={styles.description}>{service.description}</p>
                                </div>
                                <div className={styles.footer}>
                                    <img src={service.img} alt={service.title} />
                                </div>
                            </div>
                        </div>
                    ))}

                    <a className={`${styles.btn} btn-primary`} href="#">
                        SKONTAKTUJ SIĘ Z NAMI
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopSection;