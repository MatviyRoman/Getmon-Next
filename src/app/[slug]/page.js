// app/[slug]/page.js
// import { getPageBySlug, getAllPages } from '@/data/pageData';
import { getPageBySlug, getAllPages } from '@/api/pages';
import DynamicPage from '@/components/page/DynamicPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const pages = await getAllPages();

    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }) {
    try {
        const page = await getPageBySlug(params.slug);

        if (!page) {
            return {}; // Порожнє metadata (можна краще обробити)
        }

        return {
            title: `${page.title} | Page | Getmon.pl`,
            description: page.meta_description,
            keywords: "",
            robots: page.meta_robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/` + page.slug + '/',
            },
            openGraph: {
                title: page.title + " | Page | Getmon.pl",
                description: page.meta_description,
                url: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/` + page.slug + '/',
                siteName: "GetMon",
                images: [
                    {
                        url: page.image,
                        // width: 1200,
                        // height: 630,
                        alt: `${page.title} | Page | GetMon.pl`,
                    },
                ],
                locale: "pl_PL",
                type: 'article',
                // type: 'website',
            },
            other: {
                'article:modified_time': page.updated_at,
                // 'article:modified_time': formatDateToISO(page.updated_at),
            },
        };
    } catch (error) {
        console.error('Error in generateMetadata:', error);
        return {}; // fallback metadata
    }
}

export default async function Page({ params }) {
    try {
        const pageData = await getPageBySlug(params.slug);

        if (!pageData || !pageData.sections) {
            notFound(); // notFound 404
        }

        return <DynamicPage pageData={pageData} />;

    } catch (error) {
        console.error('Error in Page fetch:', error);
        notFound(); // notFound 404
    }
}

// Helper to convert '23.06.2025' to ISO string "2025-06-22T23:00:00.000Z"
function formatDateToISO(dateStr) {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('.');
    const date = new Date(`${year}-${month}-${day}T00:00:00+01:00`);
    return date.toISOString();
}