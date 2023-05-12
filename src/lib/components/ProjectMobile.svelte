<script>
    import ImageCard from "./ImageCard.svelte";

    /** @type {string} */
    export let image_src;
    /** @type {string} */
    export let title;
    /** @type {string} */
    export let description;
    /** @type {string} */
    export let image_link;
</script>

<div class="row">
    <div class="fullbox bg-gray-800 ">
        <div class="image_container">
            <ImageCard {title} {image_src} {image_link} />
        </div>
    </div>
    <div class="textbox bg-gray-800  text-sm">
        {description}
    </div>
</div>

<style>
    .textbox {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1em;
        padding-bottom: 1em;
        padding-top: 0.9em;
        padding-left: 2em;
        padding-right: 2em;
        color: #d4d4d4e6;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    .fullbox {
        position: relative;
        align-items: center;
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0.5rem 0.5rem 0 0;
    }
</style>


