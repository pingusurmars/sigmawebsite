<script lang="ts">
    let {data} = $props();
    const userAgent = data.headers.find(([key]) => key === 'user-agent')?.[1];
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <!-- CF adds headers when passing HTTP requests through their proxy, see https://developers.cloudflare.com/fundamentals/reference/http-headers/ for more info -->
    <p class="text-white text-6xl">My User Agent 💻</p>
    <p class="text-white py-6 text-xl decoration-1" >Your User Agent is <strong>{userAgent}</strong></p>
    <p class="text-white py-1">If you don't know what a User Agent is, check <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/User-Agent">this</a> page of the MDN Documentation with an explanation & examples</p>
</div>
