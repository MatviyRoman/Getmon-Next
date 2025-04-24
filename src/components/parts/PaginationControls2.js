import Link from 'next/link';
import styles from './PaginationControls.module.css';

export default function PaginationControls2({ currentPage, totalPages, categoryId }) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const getPageUrl = (page) => {
        return categoryId
            ? `/blog?page=${page}&categoryID=${categoryId}`
            : `/blog?page=${page}`;
    };

    return (
        <div className={styles.pagination}>
            {currentPage > 1 ? (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className={styles.paginationLink}
                >
                    &laquo; Poprzednia
                </Link>
            ) : (
                <span className={styles.paginationDisabled}>&laquo; Poprzednia</span>
            )}

            {getPageNumbers().map((page) => (
                <Link
                    key={page}
                    href={getPageUrl(page)}
                    className={`${styles.paginationLink} ${page === currentPage ? styles.active : ''}`}
                >
                    {page}
                </Link>
            ))}

            {currentPage < totalPages ? (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className={styles.paginationLink}
                >
                    Następna &raquo;
                </Link>
            ) : (
                <span className={styles.paginationDisabled}>Następna &raquo;</span>
            )}
        </div>
    );
}