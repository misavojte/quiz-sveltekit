<script>
	import Button from "./Button.svelte";
    import Screen from "./Screen.svelte";
    import { createEventDispatcher } from "svelte";
    /**
     * @type {string}
     */
    export let text;

    /**
     * @type {Array<{text: string, next: number}>}
     */
    export let options;

    const dispatch = createEventDispatcher();
</script>

<Screen {text}>
    <div slot="options" class="options">
        {#each options as option}
            <Button on:click={() => dispatch("next", option.next)}>
                {option.text}
            </Button>
        {/each}
    </div>
</Screen>

<style>
    .options {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>