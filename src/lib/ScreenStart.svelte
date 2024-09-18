<script>
	import Button from "./Button.svelte";
    import Screen from "./Screen.svelte";
    import { createEventDispatcher } from "svelte";
	import ScreenHeading from "./ScreenHeading.svelte";

    /**
     * @type {string}
     */
    export let text;

    /**
     * @type {number}
     */
    export let next;

    const dispatch = createEventDispatcher();
</script>

<Screen>
    <ScreenHeading {text} slot="heading" />
    <div slot="options" class="options">
        <Button on:click={() => dispatch("next", next)}>
            Začít
        </Button>
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