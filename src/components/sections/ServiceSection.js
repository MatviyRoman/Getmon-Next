import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            cta: {
                text: 'DOWIEDZ SIĘ WIĘCEJ',
                url: '/klimatyzacja-wroclaw/'
            }
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
            cta: {
                text: 'DOWIEDZ SIĘ WIĘCEJ',
                url: '/monitoring-wroclaw/'
            }
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
            cta: {
                text: 'DOWIEDZ SIĘ WIĘCEJ',
                url: '/alarmy-wroclaw/'
            }
        },
        {
            id: 4,
            title: 'Wentylacja',
            description: 'Zajmujemy się kompleksowym montażem systemów wentylacyjnych w domach, biurach i obiektach przemysłowych. Dobieramy rozwiązania dopasowane do potrzeb klienta – od projektu po uruchomienie instalacji.',
            image: {
                src: '/img/wentylacja-small.png',
                // src: '/img/wentylacja.png',
                alt: 'Wentylacja',
                // width: 400,
                // height: 300
                width: 400,
                height: 300
            },
            cta: {
                text: 'DOWIEDZ SIĘ WIĘCEJ',
                url: '/wentylacja-wroclaw/'
            }
        },
        { 
            id: 5,
            title: 'Pompy ciepła',
            description: 'Oferujemy kompleksowy montaż pomp ciepła dla domów i firm. Zapewniamy doradztwo, dobór odpowiedniego urządzenia, profesjonalną instalację oraz uruchomienie systemu.',
            image: {
                src: '/img/pompy-ciepla-small1.png',
                // src: '/img/pompy-ciepla.png',
                alt: 'Pompy ciepła',
                width: 400,
                height: 300
            },
            cta: {
                text: 'DOWIEDZ SIĘ WIĘCEJ',
                url: '/pompy-ciepla-wroclaw/'
            }
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
                                    <Link href={service.cta.url}>{service.cta.text}</Link>
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