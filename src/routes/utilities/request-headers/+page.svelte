<script lang="ts">
    let { data } = $props();
</script>

<ul>
    {#each data.headers as [key, value]}
        <li><strong>{key}:</strong> {value}</li>
    {/each}
</ul>