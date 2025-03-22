"use client";

import React from 'react';
import './StartSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

const StartSection = () => {
    const steps = [
        {
            number: 1,
            title: "DARMOWA WYCENA",
            description: "Spotkajmy się, przedstaw nam swoje oczekiwania i wizję, a my wycenimy koszt całej pracy. Możesz też zadzwonić na numer <a href='tel:884 884 823'>884 884 823</a>."
        },
        {
            number: 2,
            title: "UMOWA",
            description: "Zawieramy umowę, którą z Państwem konsultujemy. Umowa mówi m.in. o terminowym wykonaniu zlecenia zgodnie z Państwa wymaganiami."
        },
        {
            number: 3,
            title: "REALIZACJA ZLECENIA",
            description: "Pracujemy, dbamy o każdy szczegół projektu, jak został ustalony. Jesteśmy profesjonalną firmą, wszystko wykonane jest solidnie."
        },
        {
            number: 4,
            title: "ODBIÓR",
            description: "Nasza praca zakończona, rozliczamy się, dołączacie do grona naszych zadowolonych Klientów."
        }
    ];

    return (
        <section className="start-section">
            <div className="container">
                <h2 className="title">OD CZEGO ZACZYNAMY?</h2>
            </div>
            <div className="container">
                <div className="content desktop">
                    {steps.map((step, index) => (
                        <div className="step" key={index}>
                            <div className="step-number"><span>{step.number}</span></div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                        </div>
                    ))}
                </div>
                <div className="content mobile">
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                    >
                        {steps.map((step, index) => (
                            <SwiperSlide key={index}>
                                <div className="step">
                                    <div className="step-number"><span>{step.number}</span></div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="container">
                <Link href="#" className="btn btn-primary">SKONTAKTUJ SIĘ Z NAMI</Link>
            </div>
        </section>
    );
};

export default StartSection;