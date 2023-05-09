<!-- TitleSetter.svelte -->
<script>
    import { title } from './titleStore.js';
  
    export let pageTitle = '';
  
    $: {
      $title = pageTitle;
    }
  </script>
  