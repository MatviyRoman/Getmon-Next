import React from 'react';
import Link from 'next/link';
import styles from './FooterSeoLinks.module.css';
import { footerSeoLinksData } from '@/data/footerSeoLinksData';

const FooterSeoLinks = () => {
    return (
        <div className={styles.footerBottom}>
            <div className={`${styles.container} container`}>
                <div className={styles.linksWrapper}>
                    {footerSeoLinksData.map((link, index) => (
                        <React.Fragment key={link.url}>
                            <Link href={link.url} className={styles.footerLink}>
                                {link.title}
                            </Link>
                            {index < footerSeoLinksData.length - 1 && <span className={styles.separator}>|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterSeoLinks;