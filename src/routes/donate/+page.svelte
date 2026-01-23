<script lang="ts">
    import CodeBlock from "$lib/components/CodeBlock.svelte";
    import MoneroWidget from "$lib/components/MoneroWidget.svelte";

    let { data } = $props();
    const walletAddr = `4AhTY6Xyr92FjiEn7iJ2kvBnrbHbzD8ZQ5CmNKGaJN4haQTpL9MH7Mk4oHdsu6YhMFMrr79UQQuinbVKMkzzsRsCG7SzSZj`;
</script>

<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="flex flex-col lg:flex-row gap-6 items-start">
        <div class="flex-1">
            <p class="text-white text-6xl">Donate 💲</p>
            <p class="text-white py-4">First of all, thanks for being here (which I'm guessing means you'd want to support me
                financially) and checking this page out.</p>
            <p class="text-white py-2">Second of all, I stopped accepting PayPal pretty long ago because of KYC rules & all that
                stuff (and I'd rather not send my ID to a company in another country without knowing where my ID could end
                up)</p>
            <p class="text-white py-2">If you really do want to support me I accept Monero (or XMR, it's the same anyway) & my
                wallet address is: </p>
            <CodeBlock code={walletAddr}/>
            <p class="text-white py-2">You can also mine on <a href="https://monero.hashvault.pro">pool.hashvault.pro</a> with
                my wallet address from above if you want to help me mine faster.</p>
            <p class="text-white py-2">Donators:</p>
            <ul class="list-disc list-inside">
                <li>Myself</li>
            </ul>
            <p class="py-4 italic">If you donated and want your name to be here, hit me up at pingusurmars@outlook.jp or on
                Discord (@pingusurmars) with proof to show you donated.</p>
        </div>
        <div>
            <MoneroWidget {data} />
        </div>
    </div>
</div>
