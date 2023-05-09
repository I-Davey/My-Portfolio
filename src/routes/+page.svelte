<script>
    import Transitions from "$lib/components/Transitions.svelte";

    import { goto } from "$app/navigation";
    import { setTitle } from "lib/scripts/store";
    setTitle("Ian Daveys' Portfolio")
    
</script>

    <section class="container">
        <div class="container_links">
            <button class="links disabled">About Me</button>
            <button class="links " on:click={() => {goto("creations")}}>My Creations</button>
            <button class="links disabled">Contact Me</button>
            <button class="links disabled">My Links</button>
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

.links:not(.disabled) {
    /*change this to 20 when all links are enabled*/
    padding: 25px;

}

.links:not(.disabled):hover {
    
    background-color: #e6e6e6;
    color:#222831;
    transition-duration: 0.5s;
    transform: scale(1.05, 1.1);
}
</style>