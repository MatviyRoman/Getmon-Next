import { apiFetch } from './api';

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true';

export async function get404Data() {
    if (USE_MOCKS) {
        console.warn('Using mock 404 data (forced by .env)');

        return {
            title: 'Co za bałagan.',
            description: 'U nas takiej temperatury nie ma.',
            buttonText: 'Zacznij od głównego.',
            imageUrl: '/img/error404.png',
            // imageUrl: '/img/error404.svg',
        };
    }

    try {
        const data = await apiFetch('/api/404-data');
        return data;
    } catch (error) {
        console.error('API call failed and mocks disabled.');
        throw error;
    }
}