import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
    const headersArray = Array.from(request.headers.entries());

    return {
        headers: headersArray
    };
}