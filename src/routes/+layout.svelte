<script lang="ts">
    import { onMount } from "svelte";
    import { pwaInfo } from "virtual:pwa-info";

    onMount(async () => {
        if (pwaInfo) {
            const { registerSW } = await import("virtual:pwa-register")
            registerSW({
                immediate: true,
                onRegistered(r) {
                    r && setInterval(() => {
                        console.log("Checking for sw update");
                        r.update();
                    }, 20000);
                    console.log(`SW registered: ${r}`);
                },
                onRegisterError(error) {
                    console.log("SW registration error", error);
                }
            });
        }
    });

    $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ""
</script>

<svelte:head>
    {@html webManifestLink}
</svelte:head>

<main>
    <slot />
</main>

{#await import("$lib/ReloadPrompt.svelte") then { default: ReloadPrompt }}
    <ReloadPrompt />
{/await}
