"use client";

import React, { useRef } from 'react';
import styles from './ReviewSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import StarRating from '@/components/icon/StarRating';
import { testimonialsData } from '@/data/testimonialsData';
import Image from 'next/image';

function getInitials(fullName) {
    try {
        if (!fullName || typeof fullName !== 'string') return 'US'; // Default

        const validWords = fullName
            .trim()
            .split(/\s+/) // Розділяємо будь-якою кількістю пробілів
            .filter(word => /[a-zа-яё]/i.test(word)); // Фільтруємо тільки слова з літерами

        if (validWords.length === 0) return 'US';

        return validWords
            .slice(0, 2) // Беремо перші два слова
            .map(word => word[0].toUpperCase())
            .join('');
    } catch (e) {
        console.error('Error generating initials:', e);
        return 'US';
    }
}

// Функція для форматування дати у відносний час
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Przed chwilą';

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minut temu`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} godzin temu`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} dni temu`;

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} miesięcy temu`;

    const diffInYears = Math.floor(diffInMonths / 12);
    return `Ponad ${diffInYears} rok temu`;
};

const ReviewSection = () => {
    const swiperRef = useRef(null);

    return (
        <section className={styles.review}>
            <div className={`${styles.container} ${styles.containerFirst} container`}>
                <h2 className={styles.title}>NASI KLIENCI MÓWIĄ...</h2>

                <div className={`${styles.navButtonWrapper} desktop`}>
                    <button
                        className={`${styles.navButton} ${styles.navButtonPrev}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image
                            src='/img/arrow-right.svg'
                            width={30}
                            height={21}
                            alt="arrow"
                            className={styles.navButtonImg}
                            loading="lazy"
                        />
                    </button>
                    <button
                        className={`${styles.navButton} ${styles.navButtonNext}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image
                            src='/img/arrow-right.svg'
                            width={30}
                            height={21}
                            alt="arrow"
                            className={styles.navButton}
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        // pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            767: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        // navigation
                        loop
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.testimonial}>
                                    <div className={styles.header}>
                                        {/* <div className={styles.avatarContainer}>
                                            {testimonial?.img?.src ? (
                                                <Image
                                                    src={testimonial.img.src}
                                                    width={testimonial.img.width || 72}
                                                    height={testimonial.img.height || 72}
                                                    alt={testimonial.name || ''}
                                                    className={styles.avatarImage}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className={styles.avatarInitials}>
                                                    {getInitials(testimonial?.name || '')}
                                                </span>
                                            )}
                                        </div> */}

                                        <h3 className={styles.name}>
                                            {testimonial.name}
                                        </h3>
                                        <StarRating rating={testimonial.stars} />
                                    </div>
                                    <div className={styles.quoteContainer}>
                                        <p className={styles.quote}>
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                    <div className={styles.footer}>
                                        <span className={styles.date}>
                                            {formatDate(testimonial.date)}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className={`${styles.container} ${styles.containerSecond} container mobile`}>
                <div className={`${styles.navButtonWrapper} mobile`}>
                    <button
                        className={`${styles.navButton} ${styles.navButtonPrev}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image
                            src='/img/arrow-right.svg'
                            width={30}
                            height={21}
                            alt="arrow"
                            className={styles.navButtonImg}
                            loading="lazy"
                        />
                    </button>
                    <button
                        className={`${styles.navButton} ${styles.navButtonNext}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image
                            src='/img/arrow-right.svg'
                            width={30}
                            height={21}
                            alt="arrow"
                            className={styles.navButton}
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>

            <div className={`${styles.container} ${styles.containerBottom} container`}>
                <Link href="#" className={styles.link}>Zobacz wszystkie recenzje</Link>
            </div>
        </section>
    );
};

export default ReviewSection;