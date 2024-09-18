<main>
    <slot name="heading" />
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
</style>