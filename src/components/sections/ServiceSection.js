import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Klimatyzacja',
            description: 'Jesli potrzebna Ci dobra klimatyzacja, Wrocław jest miastem, w którym działamy. Od lat instalujemy klimatyzację w różnych rodzajach na terenie Wrocławia i okolic. Dobra klimatyzacja to podstawa, szczególnie w domu czy w firmie, gdzie dobre warunki pracy zwiększają wydajność pracowników.',
            image: {
                src: '/img/air-conditioner2.svg',
                alt: 'Klimatyzacja',
                width: 562,
                height: 469
            },
            cta: 'DOWIEDZ SIĘ WIĘCEJ'
        },
        {
            id: 2,
            title: 'Monitoring',
            description: 'Warto skorzystać z pomocy doświadczonych specjalistów, którzy wiedzą najlepiej, jak skutecznie rozmieścić kamery do monitoringu, aby zapewnić maksimum bezpieczeństwa, poprzez możliwie najlepszą funkcjonalność systemu.',
            image: {
                src: '/img/camera2.svg',
                alt: 'Monitoring',
                width: 446,
                height: 299
            },
            cta: 'DOWIEDZ SIĘ WIĘCEJ'
        },
        {
            id: 3,
            title: 'Systemy alarmowe',
            description: 'System alarmowy to zbiór urządzeń, służących do zabezpieczenia wyznaczonego obszaru przed włamaniem, pożarem oraz innymi niepożądanymi zdarzeniami. Sprawny, prawidłowo funkcjonujący system gwarantuje wysoki poziom bezpieczeństwa.',
            image: {
                src: '/img/ajax2.svg',
                alt: 'Systemy alarmowe',
                width: 364,
                height: 314
            },
            cta: 'DOWIEDZ SIĘ WIĘCEJ'
        }
    ];

    const companyInfo = {
        description: 'Nasza firma dokona wszelkich starań, aby zapewnić usługi na jak najwyższym poziomie. Jesteśmy przy tym przygotowani do realizacji nawet najbardziej skomplikowanych zleceń, których chętnie się podejmujemy. W trakcie pracy korzystamy wyłącznie z wysokogatunkowych materiałów.',
        highlight: 'EFEKTEM JEST PRECYZYJNE, ALE TAKŻE I ESTETYCZNE WYKONANIE.'
    };

    return (
        <section className={styles.servicesSection}>
            <div className={`${styles.container} container`}>
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.content}>
                                <h2 className={styles.serviceTitle}>{service.title}</h2>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <button className={`${styles.ctaButton} btn btn-primary`}>
                                    {service.cta}
                                </button>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={service.image.src}
                                    alt={service.image.alt}
                                    width={service.image.width}
                                    height={service.image.height}
                                    className={styles.serviceImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.companyInfo}>
                    <p className={styles.infoText}>{companyInfo.description}</p>
                    <p className={styles.highlightText}>{companyInfo.highlight}</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;