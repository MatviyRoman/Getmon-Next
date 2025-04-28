import React from 'react';
import Link from 'next/link';
import { companyInfoData } from '@/data/companyInfoData';
import styles from './FooterCopyright.module.css';

const FooterCopyright = () => {
    const currentYear = new Date().getFullYear();
    const { companyInfo } = companyInfoData;

    return (
        <div className={styles.footerCopyright}>
            <div className={`${styles.container} container`}>
                <p className={styles.copyrightText}>
                    © Copyright {currentYear} {companyInfo.name}.
                    <br className={styles.brake} />
                    {companyInfo.slogan}
                    {' '}
                    <br className={styles.brake} />
                    <Link
                        href={companyInfo.privacyPolicy.url}
                        className={styles.privacyLink}
                    >
                        {companyInfo.privacyPolicy.title}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default FooterCopyright;