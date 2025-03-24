import React from 'react';
import '@/app/globals.css';
import styles from './TopSection.module.css';
import Image from 'next/image';

const TopSection = () => {
    const services = [
        {
            title: "MONTAŻ SYSTEMÓW KLIMATYZACJI",
            description: "Jesteśmy zespołem profesjonalistów, którzy zajmują się kompleksową usługa klimatyzacji.",
            img: {
                src: '/img/conditioner.svg',
                width: 403,
                height: 152
            }
        },
        {
            title: "MONTAŻ SYSTEMÓW MONITORINGU",
            description: "Podejmujemy się budowy monitoringu od a do z.",
            img: {
                src: '/img/camera.svg',
                width: 202,
                height: 193
            }
        },
        {
            title: "MONTAŻ SYSTEMÓW ALARMOWYCH",
            description: "Posiadamy szeroki asortyment systemów alarmowych dostosowanych do potrzeb Klienta.",
            img: {
                src: '/img/ajax.svg',
                width: 175,
                height: 181
            }
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
                                    {/* <Image className={styles.img} src={service.img.src} width={service.img.width} height={service.img.height} alt={service.title} /> */}
                                    <img className={styles.img} src={service.img.src} alt={service.title} />
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