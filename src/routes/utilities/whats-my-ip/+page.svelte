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
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <p class="text-white text-6xl">What's my IP ❓</p>
    <p class="text-white py-6 text-xl decoration-1">
        Your IP address is <strong>{ipAddr}</strong>
    </p>
    <span id="mango" style="display: none">Congrats on using IPv6!</span>
    <p class="text-white py-1">
        If you'd like to get more info about your IP address, visit
        <a class="underline decoration-1" href="https://ipinfo.io/{ipAddr}">this</a> website
    </p>
</div>
