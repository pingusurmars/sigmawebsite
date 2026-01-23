import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const walletAddr = `4AhTY6Xyr92FjiEn7iJ2kvBnrbHbzD8ZQ5CmNKGaJN4haQTpL9MH7Mk4oHdsu6YhMFMrr79UQQuinbVKMkzzsRsCG7SzSZj`;

	try {
		const response = await fetch(`https://api.hashvault.pro/v3/monero/wallet/${walletAddr}/stats`);
		const data = await response.json();

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.error('Error fetching Monero data:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
};
