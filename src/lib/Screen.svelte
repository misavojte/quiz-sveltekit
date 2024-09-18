<script>
    /**
     * @type {string}
     */
    export let text;
</script>

<main>
    <h1>{text}</h1>
    <slot name="options" />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
        color: var(--text-color);
        margin: 0;
    }
</style>