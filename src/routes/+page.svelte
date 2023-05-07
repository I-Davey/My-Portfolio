<script>
    import Transitions from "$lib/components/Transitions.svelte";

    import { goto } from "$app/navigation";
</script>

    <section class="container">
        <div class="container_links">
            <button class="links disabled">Home</button>
            <button class="links disabled">About</button>
            <button class="links" on:click={() => {goto("creations")}}>Creations</button>
            <button class="links disabled">Contacts</button>
            <button class="links disabled">Links</button>
        </div>
    </section>
<style>
.container {
    position: fixed;
    top: 25%;
    left: 25%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 50%;
}

.container_links{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 2rem;
}

.links{
    background-color: #252525;
    width: 100%;
    padding: 20px;
    align-items: center;
    text-decoration: none;
    color: white;
    transition-duration: 0.5s;
    font-size: 1rem;
    font-family: 'Fira Code', monospace;

}

.container .links.disabled {
  color: #808080 !important;
  cursor: not-allowed;
}

.links:not(.disabled):hover {
    
    background-color: #e6e6e6;
    color:#222831;
    transition-duration: 0.5s;
}
</style>