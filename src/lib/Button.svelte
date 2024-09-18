<button on:click>
    <slot />
</button>

<style>
    button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
        background-color: #ffbd59;
        color: var(--color-theme-2);
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: bold;
    }
    button:hover {
        background-color: #ffaa00;
    }
    
    @media (max-width: 600px) {
        button {
            padding: 0.75rem 1.5rem;
            font-size: 1.25rem;
        }
    }
</style>