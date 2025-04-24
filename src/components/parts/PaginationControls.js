import Link from 'next/link';
import styles from './PaginationControls.module.css';

export default function PaginationControls({ currentPage, totalPages, categoryId }) {
    const getPageUrl = (page) => {
        return categoryId
            ? `/blog?page=${page}&categoryID=${categoryId}`
            : `/blog?page=${page}`;
    };

    // Always show first page
    const showFirstPage = currentPage > 2;
    // Show ellipsis after first page if there's a gap
    const showFirstEllipsis = currentPage > 3;
    // Always show last page
    const showLastPage = currentPage < totalPages - 1;
    // Show ellipsis before last page if there's a gap
    const showLastEllipsis = currentPage < totalPages - 2;
    // Show current page and adjacent pages
    const showPrevPage = currentPage > 1;
    const showNextPage = currentPage < totalPages;

    return (
        <div className={styles.pagination}>
            {/* Previous page link */}
            {/* {currentPage > 1 ? (
                <Link 
                    href={getPageUrl(currentPage - 1)} 
                    className={styles.paginationLink}
                >
                    &laquo; Poprzednia
                </Link>
            ) : (
                <span className={styles.paginationDisabled}>&laquo; Poprzednia</span>
            )} */}

            {/* First page */}
            <Link
                href={getPageUrl(1)}
                className={`${styles.paginationLink} ${1 === currentPage ? styles.active : ''}`}
            >
                1
            </Link>

            {/* First ellipsis */}
            {showFirstEllipsis && (
                <span className={styles.paginationEllipsis}>...</span>
            )}

            {/* Previous page */}
            {showPrevPage && currentPage - 1 !== 1 && (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className={styles.paginationLink}
                >
                    {currentPage - 1}
                </Link>
            )}

            {/* Current page (if not first or last) */}
            {currentPage !== 1 && currentPage !== totalPages && (
                <Link
                    href={getPageUrl(currentPage)}
                    className={`${styles.paginationLink} ${styles.active}`}
                >
                    {currentPage}
                </Link>
            )}

            {/* Next page */}
            {showNextPage && currentPage + 1 !== totalPages && (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className={styles.paginationLink}
                >
                    {currentPage + 1}
                </Link>
            )}

            {/* Last ellipsis */}
            {showLastEllipsis && (
                <span className={styles.paginationEllipsis}>...</span>
            )}

            {/* Last page (if different from first) */}
            {totalPages > 1 && (
                <Link
                    href={getPageUrl(totalPages)}
                    className={`${styles.paginationLink} ${totalPages === currentPage ? styles.active : ''}`}
                >
                    {totalPages}
                </Link>
            )}

            {/* Next page link */}
            {/* {currentPage < totalPages ? (
                <Link 
                    href={getPageUrl(currentPage + 1)} 
                    className={styles.paginationLink}
                >
                    Następna &raquo;
                </Link>
            ) : (
                <span className={styles.paginationDisabled}>Następna &raquo;</span>
            )} */}
        </div>
    );
}