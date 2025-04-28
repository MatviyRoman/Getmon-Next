import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink({ href, className = '', children }) {
    const combinedClassName = `${styles.button} ${styles[className] || ''}`;
    const text = children;

    return (
        <Link href={href} className={combinedClassName}>
            {text}
        </Link>
    );
}