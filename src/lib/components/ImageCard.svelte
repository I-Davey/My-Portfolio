<script>
    import { onMount } from "svelte";



  /** @type {string} */
  export let description;

  /** @type {string} */
  export let image_src;

  /** @type {string} */
  export let title;

  /** @type {string} */
  export let image_link;


  let isTouchDevice;
  onMount(() => {
    isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    console.log(window.matchMedia('(hover: none) and (pointer: coarse)'))
  });

</script>



<a href="{image_link}" class="card">
  <img src="{image_src}" class="card__image" alt="" />
  <div class="card__overlay">
    <div class="card__header">
      <div class="card__header-text">
        <h3 class="card__title">{title}</h3>            
      </div>
    </div>
    <p class="card__description">{description}</p>
  </div>
</a>      



  {#if isTouchDevice}
    <style>
      .card__overlay {
        transform: translateY(0);
      }

      .card__header {
        transform: translateY(0);
      }
    </style>
  {:else}
    <style>
      .card:hover .card__overlay {
        transform: translateY(0);
      }

      .card:hover .card__header {
        transform: translateY(0);
      }
    </style>
  {/if}

<style>





.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {      
  width: 100%;
  height: auto;
}



.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  background-color: #252525;
  opacity: 0.9;
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  background-color: #252525;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}



.card:hover .card__header {
  transform: translateY(0);
}


.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #ffffff;
}


.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #ffffff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    


</style>