<script lang="ts">
    import favicon16 from '$lib/assets/favicon-16x16.png';
    import favicon32 from '$lib/assets/favicon-32x32.png';
    import favicon from '$lib/assets/favicon.ico';
    import appleicon from '$lib/assets/apple-touch-icon.png';
    import manifest from '$lib/assets/site.webmanifest';
    import "$lib/assets/main.css";
    import {page} from '$app/state';
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

    let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleicon}>
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32}>
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16}>
    <link rel="manifest" href={manifest}>
</svelte:head>
{#key page.url}
    <Navbar />
{/key}
{@render children?.()}
<Footer />