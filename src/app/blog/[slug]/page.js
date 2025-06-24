import Image from 'next/image';
import styles from './BlogPost.module.css';
import { notFound } from 'next/navigation';
import CategoryFilters from '@/components/blog/CategoryFilters';
import PostItem from '@/components/blog/PostItem';
import Quote from '@/components/blog/Quote';
import { getBlogPosts } from '@/data/postData';
// import { getBlogPosts } from '@/api/blogs';

// Function to generate the metadata dynamically
export async function generateMetadata({ params }) {
    const { slug } = params;
    const blogPosts = await getBlogPosts();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Blog | Getmon",
            description: 'Blog Getmon - Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...',
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/blog/`,
            },
        };
    }

    // Use post's title and a truncated version of the content for description
    const description = post.htmlContent
        .replace(/<[^>]*>/g, ' ') // remove HTML tags, replace with space
        .replace(/\s+/g, ' ')    // collapse multiple spaces
        .trim()                   // remove leading/trailing spaces
        .substring(0, 160)
        .trim() + '...';

    console.log(post);

    // const description = post.meta_description
    //     .replace(/<[^>]*>/g, ' ') // remove HTML tags, replace with space
    //     .replace(/\s+/g, ' ')    // collapse multiple spaces
    //     .trim()                   // remove leading/trailing spaces
    //     .substring(0, 160)
    //     .trim() + '...';

    return {
        title: `${post.meta_title} | Blog | Getmon`,
        description: description,
        // keywords: "",
        robots: post.meta_robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/blog/` + post.slug,
        },
        openGraph: {
            title: post.title + " | Blog | Getmon",
            description: post.meta_description,
            url: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}/blog/` + post.slug + '/',
            siteName: "GetMon",
            images: [
                {
                    url: post.image,
                    // width: 1200,
                    // height: 630,
                    alt: `${post.title} | Blog | GetMon`,
                },
            ],
            locale: "pl_PL",
            type: "article",
        },
        other: {
            'article:modified_time': formatDateToISO(post.date),
        },
    };
}

export async function getRelatedPosts(postSlug) {
    const blogPosts = await getBlogPosts(); // Fetch mock posts

    return blogPosts
        .filter((relatedPost) => relatedPost.slug !== postSlug)
        .sort(() => 0.5 - Math.random()) // Randomize the posts
        .slice(0, 2); // Show 2 random posts
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    const blogPosts = await getBlogPosts(); // Fetch the mock posts here

    const relatedPosts = await getRelatedPosts(slug); // Get related posts

    const post = blogPosts.find((p) => p.slug === slug); // Find the current post based on slug
    const site_url = process.env.NEXT_PUBLIC_URL;
    const post_url = `${site_url}/blog/${slug}/`;

    if (!post) {
        notFound(); // notFound 404
    }

    return (
        <>
            {/* Category filters */}
            <CategoryFilters categoryId={post.category.id} />
            {/* Post Content */}
            <article className={styles.postItem}>
                <div className={`${styles.container} container`}>
                    <h1 className={styles.postTitle}>{post.title}</h1>

                    {/* Display Image */}
                    {/* {post.image && (
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={450}
                            className={styles.postImage}
                        />
                    )} */}

                    {/* HTML content */}
                    <div
                        className={styles.htmlContent}
                        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                    />
                </div>

                {/* Use the Quote component */}
                {post.quote && (
                    <div className={`${styles.container} container`}>
                        <Quote text={post.quote} />
                    </div>
                )}

                {/* Social Media Sharing */}
                <div className={styles.socialShare}>
                    <div className={`${styles.container} container`}>
                        <span>Szerzyć się</span>
                        <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(post_url)}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/img/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(post_url)}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/img/icons/X.svg" alt="Instagram" width={24} height={24} />
                        </a>
                        <a href={`https://www.instagram.com/?url=${encodeURIComponent(post_url)}`} target="_blank" rel="noopener noreferrer">
                            <Image src="/img/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                        </a>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <div className={styles.relatedPosts}>
                <div className={`${styles.container} container`}>
                    <h3>Podobne artykuły</h3>
                    <div className={styles.postsList}>
                        {relatedPosts.map((relatedPost) => (
                            <PostItem key={relatedPost.slug} post={relatedPost} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

// Helper to convert '23.06.2025' to ISO string "2025-06-22T23:00:00.000Z"
function formatDateToISO(dateStr) {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('.');
    const date = new Date(`${year}-${month}-${day}T00:00:00+01:00`);
    return date.toISOString();
}
