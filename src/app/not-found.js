"use client";

import { useEffect, useState } from 'react';
import ButtonLink from '@/components/parts/ButtonLink';
import Image from 'next/image';
import styles from './not-found.module.css';
import { get404Data } from '@/api/404';

export default function NotFound() {

    const [data, setData] = useState({
        title: '',
        description: '',
        buttonText: '',
        imageUrl: ''

        // title: 'Co za bałagan.',
        // description: 'U nas takiej temperatury nie ma.',
        // buttonText: 'Zacznij od głównego.',
        // imageUrl: '/img/error404.png',
        // // imageUrl: '/img/error404.svg',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const json = await get404Data();
                setData(json);
            } catch (error) {
                console.error('Failed to fetch 404 data', error);
            }
        }
        fetchData();
    }, []);

    if (!data.title) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    {data.imageUrl && (
                        <Image
                            src={data.imageUrl}
                            alt="Error 404"
                            className={styles.image}
                            width={480}
                            height={222}
                            priority
                        />
                    )}
                </div>

                <div className={styles.wrapperText}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.description}>{data.description}</p>
                </div>
                <ButtonLink href="/" className="yellow">
                    {data.buttonText}
                </ButtonLink>
            </div>
        </div>
    );
}