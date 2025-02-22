import Navbar from "../components/Navbar";

export const metadata = {
    title: "Blog | Getmon",
    description: "Читайте найновіші статті про моніторинг та аналіз даних...",
};

export default async function Blog() {
    // Запит до публічного API JSONPlaceholder для отримання постів
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <>
            <Navbar />
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}