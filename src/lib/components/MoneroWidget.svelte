<script lang="ts">
	let { data } = $props();

	let hashrate = $state('N/A');
	let dailyEarnings = $state('N/A');
	let monthlyEarnings = $state('N/A');
	let confirmedBalance = $state('N/A');
	let lastUpdated = $state(new Date().toLocaleTimeString());
	let isRefreshing = $state(false);
	let lastRefreshTime = $state(Date.now());

	const walletAddr = `4AhTY6Xyr92FjiEn7iJ2kvBnrbHbzD8ZQ5CmNKGaJN4haQTpL9MH7Mk4oHdsu6YhMFMrr79UQQuinbVKMkzzsRsCG7SzSZj`;

	function updateFromData(moneroData: any) {
		// Extract hashrate from collective mining pool (convert from H/s to kH/s)
		const hashrateHS = moneroData.collective.hashRate;
		hashrate = (hashrateHS / 1e3).toFixed(2);

		// Extract daily earnings from revenue (convert from atomic units to XMR - 1 XMR = 1e12 atomic units)
		const dailyAtomicUnits = moneroData.revenue.dailyCredited;
		const dailyXMR = dailyAtomicUnits / 1e12;
		const monthlyXMR = dailyXMR * 30;

		dailyEarnings = dailyXMR.toFixed(12);
		monthlyEarnings = monthlyXMR.toFixed(8);

		// Extract confirmed balance (convert from atomic units to XMR)
		const confirmedAtomicUnits = moneroData.revenue.confirmedBalance;
		confirmedBalance = (confirmedAtomicUnits / 1e12).toFixed(12);

		lastUpdated = new Date().toLocaleTimeString();
	}

	// Initialize with server data
	if (data?.data) {
		updateFromData(data.data);
	}

	async function handleRefresh() {
		// Check if 5 seconds have passed since last refresh
		const now = Date.now();
		if (now - lastRefreshTime < 5000) {
			return;
		}

		isRefreshing = true;
		try {
			const response = await fetch(`/api/monero-stats`);
			const newData = await response.json();
			updateFromData(newData);
			lastRefreshTime = now;
		} catch (error) {
			console.error('Error refreshing Monero data:', error);
		} finally {
			isRefreshing = false;
		}
        lastUpdated = new Date().toLocaleTimeString();
	}
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
	<div class="flex justify-end">
		<div class="bg-button-primary border border-gray-600 rounded-lg p-6 w-full sm:w-80 text-white">
			<div class="flex items-center justify-between mb-4">
				<h3 class="text-xl font-bold">Monero Stats</h3>
				<svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0m0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8m3-8c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z"/>
				</svg>
			</div>

			<div class="space-y-3">
				<div>
					<p class="text-xs text-gray-400">Current Hashrate</p>
					<p class="text-lg font-semibold text-orange-500">{hashrate} kH/s</p>
				</div>

				<div>
					<p class="text-xs text-gray-400">Daily Earnings</p>
					<p class="text-sm font-mono">{dailyEarnings} XMR</p>
				</div>

				<div>
					<p class="text-xs text-gray-400">Monthly Earnings</p>
					<p class="text-sm font-mono">{monthlyEarnings} XMR</p>
				</div>

				<div>
					<p class="text-xs text-gray-400">Confirmed Balance</p>
					<p class="text-sm font-mono">{confirmedBalance} XMR</p>
				</div>

			<div class="pt-2 border-t border-gray-600 flex items-center justify-between">
				<p class="text-xs text-gray-500">Last updated: {lastUpdated}</p>
				<button
					onclick={handleRefresh}
					disabled={isRefreshing}
					class="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 transition-colors"
					title="Refresh data (once per 5 seconds)"
				>
					<svg
						class="w-4 h-4 text-orange-500 transition-transform {isRefreshing ? 'animate-spin' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
					</svg>
				</button>
			</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
