// app/blog/page.js
import Image from 'next/image';
import styles from './Blog.module.css';
import PaginationControls from '@/components/parts/PaginationControls';
import CategoryFilters from '@/components/blog/CategoryFilters';
import PostItem from '@/components/blog/PostItem';
import { getMockPosts } from '@/data/postData'; // Mock data for blog posts

export const metadata = {
    title: "Blog | Getmon",
    description: "Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...",
};

export default async function Blog({ searchParams }) {
    const mockPosts = await getMockPosts();

    const params = await searchParams;
    const currentPage = Number(params?.page) || 1;
    const categoryId = Number(params?.categoryID) || null;

    const postsPerPage = 6;

    // Filter posts by category if specified
    const filteredPosts = categoryId
        ? mockPosts.filter(post => post.category.id === categoryId)
        : mockPosts;

    // Pagination logic
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    /* 
    // REAL API IMPLEMENTATION (COMMENTED OUT)
    const apiUrl = process.env.API_URL;
    let posts = [];
    let totalPosts = 0;

    try {
        const url = categoryId
            ? `${apiUrl}/api/posts?page=${currentPage}&per_page=${postsPerPage}&category=${categoryId}`
            : `${apiUrl}/api/posts?page=${currentPage}&per_page=${postsPerPage}`;

        const response = await fetch(url);
        const data = await response.json();
        posts = data.posts;
        totalPosts = data.total;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
    */

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