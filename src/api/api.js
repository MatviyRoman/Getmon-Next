export async function apiFetch(endpoint, options = {}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
        const res = await fetch(apiUrl + endpoint, {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
}
