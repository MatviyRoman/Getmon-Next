import ButtonLink from '@/components/parts/ButtonLink';
import Image from 'next/image';
import styles from './[...not_found]/not-found.module.css';
import { get404Data } from '@/api/404';

export default async function NotFound() {
    const data = await get404Data();

    if(data.title === '') {
        data.title = 'Co za bałagan.';
    };

    if(data.description === '') {
        data.description = 'U nas takiej temperatury nie ma.';
    };

    if(data.buttonText === '') {
        data.buttonText = 'Zacznij od głównego..';
    };

    if(data.imageUrl === '') {
        data.imageUrl = '/img/error404.png';
        // data.imageUrl = '/img/error404.svg';
    };

    if (!data.title) return null; // TODO: handle error

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