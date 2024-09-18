<script>
    /**
     * @type {string}
     */
    export let text;

    /**
     * @type {string | undefined}
     */
    export let color = undefined;
</script>

<h1 style="color: {color};">{text}</h1>

<style>
    h1 {
        font-size: 2rem;
        text-align: center;
        color: var(--text-color);
        margin: 0;
        font-weight: 600;
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 1.5rem;
        }
    }
</style>