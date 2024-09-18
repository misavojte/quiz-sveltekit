<script>
    import { screens } from "$lib/Screen.data";
    import ScreenDecision from "$lib/ScreenDecision.svelte";
    import ScreenResult from "$lib/ScreenResult.svelte";
    import ScreenStart from "$lib/ScreenStart.svelte";
    import { fly } from 'svelte/transition';
    import '../app.css';

    /**
     * @type {number}
     */
    let startingScreen = 0;

    $: screen = screens[startingScreen] || null;

    /**
     * @param {CustomEvent<number>} event
     */
    function handleNext(event) {
        startingScreen = event.detail;
    }
</script>

<div class="wrap">
<!-- Wrap the whole screen transition with {#key} to force full re-render when the screen changes -->
{#key startingScreen}
    <div in:fly={{ y: 300, duration: 500 }} out:fly={{ y: -300, duration: 500 }} class="screen">
        {#if screen}
            {@const text = screen.text}
            {@const type = screen.type}

            <!-- Render the appropriate component based on the screen type -->
            {#if type === 'decision'}
                {@const options = screen.options}
                <ScreenDecision {text} {options} on:next={handleNext} />
            
            {:else if type === 'end'}
                <ScreenResult {text} />
            
            {:else if type === 'start'}
                {@const next = screen.next}
                <ScreenStart {text} {next} on:next={handleNext} />
            {/if}
        {/if}
    </div>
{/key}
</div>

<style>
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }
    .screen {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        justify-content: center;
        position: absolute ;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
</style>
