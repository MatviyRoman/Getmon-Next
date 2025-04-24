// app/blog/page.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Blog.module.css';
import PaginationControls from '@/components/parts/PaginationControls';

export const metadata = {
    title: "Blog | Getmon",
    description: "Przeczytaj najnowsze artykuły na temat klimatyzacji i wentylacji...",
};

// Mock data for blog posts
const mockPosts = [
    {
        id: 1,
        slug: "post1",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU?",
        content: "Jeżeli chcesz zamontować klimatyzację w swoim domu lub mieszkaniu, to zapraszamy do zapoznania się z nasza oferta która obejmuje najwyższej jakości sprzęty.",
        date: "12.11.2025",
        category: {
            id: 2,
            name: "O naszej firmie"
        },
        quote: "Najwyższa jakość sprzętu to nasz priorytet",
        image: "/img/blog/blog1.png",
        htmlContent: "<p>Jeżeli chcesz zamontować <strong>klimatyzację</strong> w swoim domu...</p>"
    },
    {
        id: 2,
        slug: "post2",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog2.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 3,
        slug: "post3",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "Klimatyzacja przypodłogowo-podsufitowa",
        content: "GETMON od lat instaluje systemy klimatyzacji do biur, firm i mieszkań we Wrocławiu i okolicach. Mamy wiele różnych systemów do wyboru, więc możesz znaleźć idealny dla swoich potrzeb.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog3.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 4,
        slug: "post4",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "Jak działa klimatyzacja przypodłogowo-podsufitowa?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj dużo niższy koszt.Cena urządzeń to 2-4 tys. zł i w przypadku małych powierzchni będą one wystarczające.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog4.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 5,
        slug: "post5",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog5.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 6,
        slug: "post6",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog6.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 7,
        slug: "post1",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog6.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 8,
        slug: "post1",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog6.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 9,
        slug: "post1",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog6.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    },
    {
        id: 10,
        slug: "post1",
        meta_title: "JAKI JEST KOSZT ZAKUPU KLIMATYZACJI DO DOMU? - Getmon.pl",
        meta_description:
            "Potrzebna Ci klimatyzacja na terenie Wrocławia i okolic? ⭐ Sprawdź ofertę naszej firmy - szybki montaż i gwarancja!",
        meta_robots:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        title: "ILE KOSZTUJE KLIMATYZACJA DO MIESZKANIA?",
        content: "Klimatyzacja w mieszkaniu to zazwyczaj niższy koszt. Cena urządzeń to 2-4 tys. zł w przypadku małych powierzchni.",
        date: "12.11.2025",
        category: {
            id: 1,
            name: "Nasze praktyki"
        },
        quote: "Dopasowujemy rozwiązania do Twoich potrzeb",
        image: "/img/blog/blog6.png",
        htmlContent: "<p>Klimatyzacja w mieszkaniu to <em>zazwyczaj niższy koszt</em>...</p>"
    }
];

export default async function Blog({ searchParams }) {
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
            <div className={styles.categoryFilters}>
                <div className={`${styles.container} container`}>
                    <Link
                        href="/blog"
                        className={`${styles.categoryButton} ${!categoryId ? styles.active : ''}`}
                    >
                        Wszystkie
                    </Link>
                    <Link
                        href="/blog?categoryID=1"
                        className={`${styles.categoryButton} ${categoryId === 1 ? styles.active : ''}`}
                    >
                        Nasze praktyki
                    </Link>
                    <Link
                        href="/blog?categoryID=2"
                        className={`${styles.categoryButton} ${categoryId === 2 ? styles.active : ''}`}
                    >
                        O naszej firmie
                    </Link>
                    <Link
                        href="/blog?categoryID=3"
                        className={`${styles.categoryButton} ${categoryId === 3 ? styles.active : ''}`}
                    >
                        Część teoretyczna procesów
                    </Link>
                </div>
            </div>

            {/* Posts list */}
            {paginatedPosts.length > 0 ? (
                <>
                    <div className={styles.postsList}>
                        {paginatedPosts.map((post) => (
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
                        ))}
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