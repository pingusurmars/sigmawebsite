import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
    const headers = request.headers;

    // Convert to an object or array
    const headersObject: Record<string, string> = {};
    headers.forEach((value, key) => {
        headersObject[key] = value;
    });

    // Or as an array of [key, value] pairs
    const headersArray = Array.from(headers.entries());

    return {
        headers: headersObject,
        headersArray: headersArray
    };
}