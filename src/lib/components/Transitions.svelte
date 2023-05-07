<script>
    import { fade } from 'svelte/transition'
    import { cubicIn, cubicOut } from 'svelte/easing'
  
  </script>
  
<div
    in:fade={{ easing: cubicOut, duration: 400}}

    >
    <slot/>
</div>