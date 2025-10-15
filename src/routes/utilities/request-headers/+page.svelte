<script lang="ts">
    let {data} = $props();
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <p class="text-white text-6xl">My Request Headers ❓</p>
    <ul class="py-3 list-inline list-inside mx-auto">
        {#each data.headers as [key, value]}
            <li class="text-white py-1" ><strong>{key}:</strong> {value}</li>
        {/each}
    </ul>
</div>
