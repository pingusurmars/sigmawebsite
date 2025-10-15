<script lang="ts">
    import { onMount } from 'svelte';

    let { data } = $props();
    const ipAddr = data.headers.find(([key]) => key === 'x-real-ip')?.[1];
    if (ipAddr === null) {
        throw new Error('No IP address found. Something went (very) wrong.');
    }
    onMount(() => {
        const mango = document.getElementById('mango');
        if (ipAddr?.includes(':')) {
            mango?.removeAttribute('style');
        }
    });
    const ipInfo = data.ipInfo;
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <p class="text-white text-6xl">What's my IP ❓</p>
    <p class="text-white py-6 text-xl decoration-1">
        Your IP address is <strong>{ipAddr}</strong>
    </p>
    <p class="text-white py-4 underlined decoration-1">Here's some info from <a href="http://ip-api.com">IP-API.com's API: </a></p>
    <p class="text-white">City: {ipInfo.city}</p>
    <p class="text-white">ZIP Code: {ipInfo.zip}</p>
    <p class="text-white">Region: {ipInfo.regionName}</p>
    <p class="text-white">Country: {ipInfo.country}</p>
    <p class="text-white">ISP: {ipInfo.isp}</p>
    <p class="text-white">ASN: {ipInfo.as}</p>

    <span id="mango" class="py-4" style="display: none">Congrats on supporting IPv6 and welcome to the future's internet!</span>
    <p class="text-white py-1">
        If you'd like to get more info about your IP address, visit
        <a class="underline decoration-1" href="https://ipinfo.io/{ipAddr}">this</a> website (info is provided as-is and may be inaccurate)
    </p>
</div>
