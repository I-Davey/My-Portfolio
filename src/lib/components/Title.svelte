<!-- TitleSetter.svelte -->
<script>
    import { title } from '$lib/scripts/store.js';
  
    export let pageTitle = '';
  
    $: {
      $title = pageTitle;
      document.title = pageTitle;
    }
  </script>