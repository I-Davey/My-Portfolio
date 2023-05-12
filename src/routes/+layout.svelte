<script>
  import TopBar from "$lib/components/TopBar.svelte";
  import Transitions from "$lib/components/Transitions.svelte";
  import { page } from "$app/stores"; // <-- new

  import "../app.css";
</script>

{#key $page}
  <TopBar />
{/key}

<div class="containerer">
  {#key $page}
    <Transitions>
      <slot />
    </Transitions>
  {/key}
</div>

<style>
  :global(html),
  :global(body) {
    background-color: #525252;
    margin: 0;
    height: max-content;
  }

  .containerer {
    background-color: #525252;
    color: #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
