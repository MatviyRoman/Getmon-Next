// app/blog/page.js
import Image from 'next/image';
import styles from './Blog.module.css';
import PaginationControls from '@/components/parts/PaginationControls';
import CategoryFilters from '@/components/blog/CategoryFilters';
import PostItem from '@/components/blog/PostItem';
// import { getBlogPosts } from '@/data/postData'; // Mock data for blog posts
import { getBlogPosts } from '@/api/blogs'; // API call to fetch blog posts


export const metadata = {
    title: "Blog | Getmon",
    description: "Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...",
    keywords: "Blog, klimatyzacji, wentylacji, GetMon",
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/blog/`,
    },
    openGraph: {
        title: "Blog | Getmon.pl",
        description: "Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...",
        url: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/blog/`,
        siteName: "GetMon",
        // images: [
        //   {
        //     url: "https://getmon.pl/og-image.jpg",
        //     width: 1200,
        //     height: 630,
        //     alt: "GetMon – SEO оптимізований сайт",
        //   },
        // ],
        locale: "pl_PL",
        type: "website",
    },
};

export default async function Blog({ searchParams }) {
    const blogPosts = await getBlogPosts();

    const params = await searchParams;
    const currentPage = Number(params?.page) || 1;
    const categoryId = Number(params?.categoryID) || null;

    const postsPerPage = 6;

    // Визначаємо robots залежно від наявності ?page
    const hasPageParam = !!params?.page;
    const robots = hasPageParam
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    // Filter posts by category if specified
    const filteredPosts = categoryId
        ? blogPosts.filter(post => post.category.id === categoryId)
        : blogPosts;

    // Pagination logic
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    // Added robots to metadata
    metadata.robots = robots;

    return (
        <>
            {/* <h1 className={styles.blogTitle}>Nasz Blog</h1> */}

            {/* Category filters */}
            <CategoryFilters categoryId={categoryId} />

            {/* Posts list */}
            {paginatedPosts.length > 0 ? (
                <>
                    {/* <h1 className={styles.blogTitle}>Nasz Blog</h1> */}
                    <div className={`${styles.container} container`}>
                        <div className={styles.postsList}>
                            {paginatedPosts.map((post) => (
                                <PostItem key={post.id} post={post} />
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.container} container`}>
                        <PaginationControls
                            currentPage={currentPage}
                            totalPages={totalPages}
                            categoryId={categoryId}
                        />
                    </div>
                </>
            ) : (
                <p className={styles.noPosts}>Brak postów do wyświetlenia.</p>
            )}
        </>
    );
}