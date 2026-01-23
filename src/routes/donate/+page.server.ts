import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const walletAddr = `4AhTY6Xyr92FjiEn7iJ2kvBnrbHbzD8ZQ5CmNKGaJN4haQTpL9MH7Mk4oHdsu6YhMFMrr79UQQuinbVKMkzzsRsCG7SzSZj`;

	try {
		// Fetch wallet stats from HashVault API
		const response = await fetch(
			`https://api.hashvault.pro/v3/monero/wallet/${walletAddr}/stats`
		);
		const data = await response.json();

		return {
			moneroData: data
		};
	} catch (error) {
		console.error('Error fetching Monero data:', error);
		return {
			moneroData: null
		};
	}
};
