<script>
    import TopBar from '$lib/components/TopBar.svelte';
    import Transitions from "$lib/components/Transitions.svelte";
    import { page } from '$app/stores' // <-- new


  </script>



<TopBar/>

<div class="container">
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

.container {
  background-color: #525252;
  color: #E5E5E5 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>