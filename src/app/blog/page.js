import Link from 'next/link';

export const metadata = {
    title: "Blog | Getmon",
    description: "Читайте найновіші статті про моніторинг та аналіз даних...",
};

export default async function Blog({ searchParams }) {
    // First await the searchParams
    const params = await new Promise((resolve) => {
        setTimeout(() => resolve(searchParams), 0);
    });
    
    // Then safely access the page parameter
    const pageParam = params?.page;
    const currentPage = pageParam ? Number(pageParam) : 1;
    const postsPerPage = 10;
    
    // Rest of your component remains the same
    const offset = (currentPage - 1) * postsPerPage;
    
    let posts = [];
    let totalPosts = 0;
    
    try {
        const [postsRes, totalRes] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${postsPerPage}`),
            fetch('https://jsonplaceholder.typicode.com/posts')
        ]);
        
        posts = await postsRes.json();
        totalPosts = (await totalRes.json()).length;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
    
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog Posts</h1>
            
            {posts.length > 0 ? (
                <>
                    <ul className="posts-list">
                        {posts.map((post) => (
                            <li key={post.id} className="post-item">
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-body">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                    
                    <PaginationControls 
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </>
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
}

function PaginationControls({ currentPage, totalPages }) {
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

    return (
        <div className="pagination">
            {currentPage > 1 ? (
                <Link 
                    href={`/blog?page=${currentPage - 1}`} 
                    className="pagination-link"
                >
                    &laquo; Previous
                </Link>
            ) : (
                <span className="pagination-disabled">&laquo; Previous</span>
            )}
            
            {getPageNumbers().map((page) => (
                <Link
                    key={page} 
                    href={`/blog?page=${page}`}
                    className={`pagination-link ${page === currentPage ? 'active' : ''}`}
                >
                    {page}
                </Link>
            ))}
            
            {currentPage < totalPages ? (
                <Link 
                    href={`/blog?page=${currentPage + 1}`} 
                    className="pagination-link"
                >
                    Next &raquo;
                </Link>
            ) : (
                <span className="pagination-disabled">Next &raquo;</span>
            )}
        </div>
    );
}







































// "use client";

// import Link from "next/link";

// export const metadata = {
//     title: "Blog | Getmon",
//     description: "Читайте найновіші статті про моніторинг та аналіз даних...",
// };

// export default async function Blog({ searchParams }) {
//     // Properly handle searchParams
//     const pageParam = searchParams?.page;
//     const currentPage = pageParam ? Number(pageParam) : 1;
//     const postsPerPage = 10;
    
//     // Calculate offset for pagination
//     const offset = (currentPage - 1) * postsPerPage;
    
//     // Fetch data with error handling
//     let posts = [];
//     let totalPosts = 0;
    
//     try {
//         const [postsRes, totalRes] = await Promise.all([
//             fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${postsPerPage}`),
//             fetch('https://jsonplaceholder.typicode.com/posts')
//         ]);
        
//         posts = await postsRes.json();
//         totalPosts = (await totalRes.json()).length;
//     } catch (error) {
//         console.error("Failed to fetch posts:", error);
//     }
    
//     const totalPages = Math.ceil(totalPosts / postsPerPage);

//     return (
//         <div className="container">
//             <div className="blog">
//                 <h1 className="blog-title">Blog Posts</h1>
                
//                 {posts.length > 0 ? (
//                     <>
//                         <ul className="posts-list">
//                             {posts.map((post) => (
//                                 <li key={post.id} className="post-item">
//                                     <h2 className="post-title">{post.title}</h2>
//                                     <p className="post-body">{post.body}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                         <br/><br/>
//                         <PaginationControls 
//                             currentPage={currentPage}
//                             totalPages={totalPages}
//                         />
//                     </>
//                 ) : (
//                     <p>No posts found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// function PaginationControls({ currentPage, totalPages }) {
//     const getPageNumbers = () => {
//         const pages = [];
//         const maxVisiblePages = 5;
        
//         let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//         let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
//         if (endPage - startPage + 1 < maxVisiblePages) {
//             startPage = Math.max(1, endPage - maxVisiblePages + 1);
//         }
        
//         for (let i = startPage; i <= endPage; i++) {
//             pages.push(i);
//         }
        
//         return pages;
//     };

//     return (
//         <div className="pagination">
//             {currentPage > 1 ? (
//                 <Link 
//                     href={`/blog?page=${currentPage - 1}`} 
//                     className="pagination-link"
//                 >
//                     &laquo; Previous
//                 </Link>
//             ) : (
//                 <span className="pagination-disabled">&laquo; Previous</span>
//             )}
            
//             {getPageNumbers().map((page) => (
//                 <Link
//                     key={page} 
//                     href={`/blog?page=${page}`}
//                     className={`pagination-link ${page === currentPage ? 'active' : ''}`}
//                 >
//                     {page}
//                 </Link>
//             ))}
            
//             {currentPage < totalPages ? (
//                 <Link 
//                     href={`/blog?page=${currentPage + 1}`} 
//                     className="pagination-link"
//                 >
//                     Next &raquo;
//                 </Link>
//             ) : (
//                 <span className="pagination-disabled">Next &raquo;</span>
//             )}
//         </div>
//     );
// }

// export const metadata = {
//     title: "Blog | Getmon",
//     description: "Читайте найновіші статті про моніторинг та аналіз даних...",
// };

// export default async function Blog() {
//     // Запит до публічного API JSONPlaceholder для отримання постів
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();

//     return (
//         <>
//             <h1>Blog Posts</h1>
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p>{post.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }