import Image from 'next/image';
import styles from './BlogPost.module.css';
import { notFound } from 'next/navigation';
import CategoryFilters from '@/components/blog/CategoryFilters';
import PostItem from '@/components/blog/PostItem';
import Quote from '@/components/blog/Quote';
import { getMockPosts } from '@/data/postData';

// Function to generate the metadata dynamically
export async function generateMetadata({ params }) {
    const { slug } = params;
    const mockPosts = await getMockPosts();
    const post = mockPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Blog | Getmon",
            description: "Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...",
        };
    }

    // Use post's title and a truncated version of the content for description
    const description = post.htmlContent.replace(/<[^>]*>/g, '').substring(0, 160) + '...';

    return {
        title: `${post.title} | Blog | Getmon`,
        description: description,
    };
}

export async function getRelatedPosts(postSlug) {
    const mockPosts = await getMockPosts(); // Fetch mock posts

    return mockPosts
        .filter((relatedPost) => relatedPost.slug !== postSlug)
        .sort(() => 0.5 - Math.random()) // Randomize the posts
        .slice(0, 2); // Show 2 random posts
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    const mockPosts = await getMockPosts(); // Fetch the mock posts here

    const relatedPosts = await getRelatedPosts(slug); // Get related posts

    const post = mockPosts.find((p) => p.slug === slug); // Find the current post based on slug
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
                <div className={`${styles.container} container`}>
                    <Quote text={post.quote} />
                </div>

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
