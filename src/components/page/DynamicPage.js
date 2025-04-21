// components/DynamicPage.js
import styles from './DynamicPage.module.css';
import Image from 'next/image';
import { companyInfoData } from '@/data/companyInfoData';

// Main component
export default function DynamicPage({ pageData }) {
    return (
        <main className={styles.main}>
            {pageData.sections.map((section) => (
                <SectionRenderer key={section.id} section={section} />
            ))}
        </main>
    );
}

// Section renderer component
function SectionRenderer({ section }) {
    // Determine section class based on block type
    const sectionClass = section.block === 'slogan'
        ? styles.sloganSection
        : styles.pageSection;

    return (
        <section className={sectionClass}>
            {renderSectionContent(section)}
        </section>
    );
}

// Helper function to render appropriate section content
function renderSectionContent(section) {
    if (section.block === 'slogan') {
        return <SloganSection section={section} />;
    }

    return section.type === 'text'
        ? <TextSection section={section} />
        : <HTMLSection section={section} />;
}

// Slogan section component
function SloganSection({ section }) {
    const { companyInfo } = companyInfoData;

    return (
        <div className={`${styles.container} container`}>
            <div className={styles.sloganContent}>
                <div className={styles.sloganText}>{section.content}</div>
                <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                    className={styles.sloganButton}
                >
                    <Image
                        src="/img/hugeicons_hold-phone.svg"
                        alt={companyInfo.name}
                        width={32}
                        height={32}
                        priority
                    />
                    {companyInfo.phone_short}
                </a>
            </div>
        </div>
    );
}

function TextSection({ section }) {
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.pageContainer}`}>
                {section.title && <h1 className={styles.sectionTitle}>{section.title}</h1>}
                <div className={styles.textContent}>{section.content}</div>
            </div>
        </div>
    );
}

function HTMLSection({ section }) {
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.pageContainer}`}>
                {section.title && <h1 className={styles.sectionTitle}>{section.title}</h1>}

                <div className={styles.htmlContent}>
                    {/* Render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
            </div>
        </div>
    );
}