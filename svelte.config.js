import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    kit: {
        adapter: adapter({
            routes: {
                include: ['/*'],
                exclude: ['<all>', '/sitemap.xml']
            }
        }),
    }
};

export default config;