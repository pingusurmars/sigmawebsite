<script lang="ts">
    let {data} = $props();
    const ipAddr = data.headers.find(([key]) => key === 'CF-Connecting-IP')?.[1];
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <!-- CF adds headers when passing HTTP requests through their proxy, see https://developers.cloudflare.com/fundamentals/reference/http-headers/ for more info -->
    <p class="text-white text-6xl">What's my IP ❓</p>
    <p class="text-white py-6 text-xl decoration-1" >Your IP address is <strong>{ipAddr}</strong></p>
    <p class="text-white py-1">If you'd like to get more info about your IP address, visit <a class="underline decoration-1" href="https://ipinfo.io/{ipAddr}">this</a> website (not sponsored, I just like their UI)</p>
</div>