<script lang="ts">
	let { data } = $props();

	let hashrate = $state('N/A');
	let dailyEarnings = $state('N/A');
	let monthlyEarnings = $state('N/A');
	let confirmedBalance = $state('N/A');

	if (data?.moneroData) {
		const moneroData = data.moneroData;

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
	}

	const lastUpdated = new Date().toLocaleTimeString();
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

				<div class="pt-2 border-t border-gray-600">
					<p class="text-xs text-gray-500">Last updated: {lastUpdated}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
