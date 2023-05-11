<script>
    import ImageCard from "./ImageCard.svelte";

    
    export let title;
    export let image_src;
    export let image_link;
    export let description;


</script>


    <div class="row">
        <div class="left">
        <div class = "image_container">
            <ImageCard title="Folium Map" image_src="/about_pics/folium_map.jpg" image_link="./projects/folium_map"></ImageCard>
        </div>
        </div>
        <div class="right">
        <div class="textbox">
           {description}
        </div>
        </div>
    </div>


