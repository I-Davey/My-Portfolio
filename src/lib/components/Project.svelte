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
  export let description;

  /** @type {string} */
  export let image_link;
  /** @type {string} */
  export let info;

  let isTouchDevice;
  onMount(() => {
    isTouchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
    console.log(window.matchMedia("(hover: none)"));
    console.log(isTouchDevice);
  });
</script>

<a href={image_link} class="sm:w-1/2 p-4 w-full h-full">
  <div class="flex relative">
    <img
      alt="gallery"
      class="absolute inset-0 w-full h-full object-cover object-center"
      src={image_src}
    />
    <div
      class="px-8 py-32 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
    >
      <h2
        class="tracking-widest text-sm title-font font-medium text-green-400 mb-1"
      >
        {info}
      </h2>
      <h1 class="title-font text-lg font-medium text-white mb-3">
        {title}
      </h1>
      <p class="leading-relaxed">{description}</p>
    </div>
  </div>
</a>

<style>
  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 4%;
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

    background-color: #252525;
    transition: 0.2s ease-in-out;
  }

  .card__title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: #ffffff;
  }

  .card__header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    .card {
      border-radius: 1%;
      box-shadow: none;
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
    }
  }
</style>
