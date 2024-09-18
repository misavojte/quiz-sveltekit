<script>
    import Heart from "./Heart.svelte";
import Screen from "./Screen.svelte";
	import ScreenHeading from "./ScreenHeading.svelte";

    /**
     * @type {string}
     */
    export let text;

    /**
     * @type {string}
     */
    export let color;

    /**
     * @type {string}
     */
    export let description;

</script>

<Screen>
    <div class="heading" slot="heading">
        <ScreenHeading {text} {color} />
        <Heart {color} />
    </div>
    <div slot="options" class="description">
        {description}
    </div>
</Screen>

<style>
    .heading {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .description {
        font-size: 1.35rem;
        max-width: 20rem;
        text-align: center;
        color: var(--text-color);
        margin: 0;
    }

    @media (max-width: 600px) {
        .description {
            font-size: 1.2rem;
        }
    }
</style>