<script lang="ts">
    import favicon16 from '$lib/assets/favicon-16x16.png';
    import favicon32 from '$lib/assets/favicon-32x32.png';
    import favicon from '$lib/assets/favicon.ico';
    import appleicon from '$lib/assets/apple-touch-icon.png';
    import manifest from '$lib/assets/site.webmanifest';
    import "$lib/assets/main.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    let { children } = $props();
</script>

<svelte:head>
    <link href={favicon} rel="icon"/>
    <link href={appleicon} rel="apple-touch-icon" sizes="180x180">
    <link href={favicon32} rel="icon" sizes="32x32" type="image/png">
    <link href={favicon16} rel="icon" sizes="16x16" type="image/png">
    <!-- Privacy-friendly analytics by Plausible -->
    <script async src="https://stats.pingusurmars.xyz/js/pa-peddCbasgqhQsv_I2kVmm.js"></script>
    <script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}}; plausible.init()</script>
    <link href={manifest} rel="manifest">
</svelte:head>
<Navbar/>
{@render children?.()}
<Footer/>
