// components/Quote.js
import styles from './Quote.module.css';
import Image from 'next/image';

const Quote = ({ text }) => {
    return (
        <div className={styles.quoteContainer}>
            <div className={styles.postBlockquote}>
                Przykładowy cytat:
            </div>

            <blockquote className={styles.quote}>
                <Image
                    src="/img/icons/Quote.svg"
                    alt="quote"
                    width={60}
                    height={60}
                />
                <p>{text}</p>
            </blockquote>
        </div>
    );
};

export default Quote;
