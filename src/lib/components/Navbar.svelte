<!-- Yes this was blatantly stolen from the tailwind website, and in my defense it looked good and the code is free -->

<script lang="ts">
    import '@tailwindplus/elements';
    import pfp from '$lib/assets/favicon-32x32.png'
</script>

<nav class="relative bg-primary after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                        command="--toggle" commandfor="mobile-menu"
                        type="button">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <svg aria-hidden="true" class="size-6 in-aria-expanded:hidden" data-slot="icon" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <svg aria-hidden="true" class="size-6 not-in-aria-expanded:hidden" data-slot="icon" stroke="currentColor"
                         stroke-width="1.5" viewBox="0 0 24 24">
                        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex shrink-0 items-center">
                    <img alt="The Penguin" class="h-8 w-auto" src={pfp}/>
                    <p class="text-gray-300">PinguSurMars_</p>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                           href="/">Home</a>
                        <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                           href="/projects/">Projects</a>
                        <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                           href="/aboutme/">About
                            Me</a>
                        <div class="relative">
                            <el-dropdown class="inline-block">
                                <button class="inline-flex text-gray-300 hover:bg-white/5 hover:text-white w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm">
                                    Utilities
                                    <svg aria-hidden="true" class="-mr-1 size-5 text-gray-400" data-slot="icon" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path clip-rule="evenodd"
                                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" fill-rule="evenodd"/>
                                    </svg>
                                </button>

                                <el-menu anchor="bottom end" class="w-56 rounded-md bg-primary outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                         popover>
                                    <div class="py-1">
                                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                                           href="#">What's
                                            my IP?</a>
                                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                                           href="#">What's
                                            my User Agent</a>
                                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                                           href="#">What
                                            are my request headers?</a>
                                    </div>
                                </el-menu>
                            </el-dropdown>
                        </div>
                        <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                           href="/donate/">Donate</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <el-disclosure class="block sm:hidden" hidden id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
               href="/">Home</a>
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
               href="/projects/">Projects</a>
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
               href="/aboutme/">About
                Me</a>
            <el-dropdown class="inline-block">
                <button class="inline-flex text-gray-300 hover:bg-white/5 hover:text-white w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm">
                    Utilities
                    <svg aria-hidden="true" class="-mr-1 size-5 text-gray-400" data-slot="icon" fill="currentColor"
                         viewBox="0 0 20 20">
                        <path clip-rule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" fill-rule="evenodd"/>
                    </svg>
                </button>

                <el-menu anchor="bottom end" class="w-56 origin-top-right rounded-md bg-primary outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                         popover>
                    <div class="py-1">
                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                           href="#">What's
                            my IP?</a>
                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                           href="#">What's
                            my User Agent</a>
                        <a class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                           href="#">What
                            are my request headers?</a>
                    </div>
                </el-menu>
            </el-dropdown>
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
               href="/donate/">Donate</a>
        </div>
    </el-disclosure>
</nav>
