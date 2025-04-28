// app/[slug]/page.js
import { getMockPageBySlug, getAllMockPages } from '@/data/pageData';
import DynamicPage from '@/components/page/DynamicPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    // const res = await fetch(`${process.env.API_URL}/api/pages`);
    // const pages = await res.json();

    const pages = getAllMockPages();

    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }) {
    // const res = await fetch(`${process.env.API_URL}/api/pages/${params.slug}/ `);
    // const page = await res.json();

    const page = getMockPageBySlug(params.slug);

    return {
        title: page.meta_title,
        description: page.meta_description,
        openGraph: {
            title: page.meta_title,
            description: page.meta_description,
            url: `https://getmon.pl/${page.slug}`,
            type: 'article',
        },
        robots: page.meta_robots,
        alternates: {
            canonical: `https://getmon.pl/${page.slug}`,
        },
    };
}

export default async function Page({ params }) {
    try {
        // const res = await fetch(`${process.env.API_URL}/api/pages/${params.slug}`);
        // const pageData = await res.json();

        const pageData = await getMockPageBySlug(params.slug);

        if (!pageData || !pageData.sections) {
            notFound(); // notFound 404
        }

        return <DynamicPage pageData={pageData} />;

    } catch (error) {
        console.error('Error in Page fetch:', error);
        notFound(); // notFound 404
    }
}