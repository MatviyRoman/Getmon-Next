export const ApiBase = Object.freeze({
    URL: process.env.NEXT_PUBLIC_API_URL || 'http://admin.getmon.local',
});

export async function getBlogPosts() {
    try {
        const response = await fetch(`${ApiBase.URL}/api/blogs`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        const result = await response.json();
        return result.data; // Return the array of blog posts
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}