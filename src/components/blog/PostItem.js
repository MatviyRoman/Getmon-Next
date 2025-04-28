import Link from 'next/link';
import Image from 'next/image';
import styles from './PostItem.module.css'; // або твій існуючий styles, якщо один спільний

export default function PostItem({ post }) {
    return (
        <article key={post.id} className={styles.postItem}>
            <div className={`${styles.container} container`}>
                {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={256}
                            height={154}
                            className={styles.postImage}
                        />
                    </Link>
                )}
                <div className={styles.postContent}>
                    <h2 className={styles.postTitle}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div
                        className={styles.postExcerpt}
                    >
                        { post.content }
                    </div>
                    {/* <div
                        className={styles.postExcerpt}
                        dangerouslySetInnerHTML={{ __html: post.htmlContent || post.content }}
                    /> */}
                    <div className={styles.postMeta}>
                        <span className={styles.postCategory}>{post.category.name}</span>
                        <time className={styles.postDate}>{post.date}</time>
                    </div>
                </div>
            </div>
        </article>
    );
}
