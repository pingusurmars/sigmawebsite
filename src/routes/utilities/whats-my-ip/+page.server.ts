import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    const headers = [...request.headers.entries()];
    const userIP = headers.find(([key]) => key === 'x-real-ip')?.[1] ?? null;

    if (!userIP) {
        return { ipInfo: null };
    }

    // fetch IP info from ip-api
    const res = await fetch(`http://ip-api.com/json/${userIP}`);
    const ipInfo = await res.json();

    return {
        ipInfo
    };
};
