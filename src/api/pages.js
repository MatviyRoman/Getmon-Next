export const ApiBase = Object.freeze({
    URL: process.env.NEXT_PUBLIC_API_URL || 'http://admin.getmon.local',
});

export async function dataPages() {
    try {
        const response = await fetch(`${ApiBase.URL}/api/pages`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch pages');
        }
        const result = await response.json();

        return result.data; // Return the array of pages
    } catch (error) {
        console.error('Error fetching pages:', error);
        throw error;
    }
}

export async function getPageBySlug(slug) {
    const pages = await dataPages();

    console.log(pages);

    return pages.find((page) => page.slug === slug) || null;
}

export async function getAllPages() {
    const pages = await dataPages();
    return pages.map((page) => ({ slug: page.slug }));
}
