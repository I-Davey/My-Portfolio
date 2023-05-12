<script>
    import { goto } from "$app/navigation";
    import { DoubleArrowRight } from "radix-icons-svelte";
    import { onMount } from "svelte";


  /** @type {string} */

  /** @type {string} */
  export let image_src;

  let arrow_color = "#D9D9D9";

  /** @type {string} */
  export let title;

  /** @type {string} */
  export let image_link;


  let isTouchDevice;
  onMount(() => {
    isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    console.log(window.matchMedia('(hover: none)'))
    console.log(isTouchDevice)
  });


  function focusArrow() {
      arrow_color = "white";
  }
  
  function unfocusArrow() {
      arrow_color = "#D9D9D9";
  }

</script>



<div class="card">
  <img src="{image_src}" class="card__image" alt="" />
    <div class="card__header  bg-gray-800">
      <div class="card__header-text">
        <h3 class="title-font text-xl">{title}</h3> 
              <a href="{image_link}" class="logo-arrow-container" on:mouseenter="{focusArrow}" on:mouseleave="{unfocusArrow}"><DoubleArrowRight color="{arrow_color}" size={40}/></a>
      </div>
    </div>


</div>      

<style>
.card {
  position: relative;
  display: block;
  height: 100%;  
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);



}

.card__image {      
  width: 100%;
  height: auto;

}



.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
  padding-bottom: 1em;
  padding-top: 0.9em;
  padding-left: 2em;
  padding-right: 2em;

  transition: .2s ease-in-out;
}



.card__header-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;  
}



  .card{
    box-shadow: none;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }




</style>
