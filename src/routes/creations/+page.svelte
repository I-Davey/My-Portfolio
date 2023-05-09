<script>
    import { setTitle } from "lib/scripts/store";
    setTitle("Creations")
</script>


<div class="area">
    <h1 class="title">CREATIONS</h1>

    <a href="/creations/folium_map" class="creation-link">-View my Graffiti Map (Folium + PyScript)</a>
    <a href="/creations/test" class="creation-link">-go to the testing section</a>

</div>


<style>

/*move creation-link to the far left*/
.creation-link {
    align-self: left;
    color: aquamarine;
    text-decoration: underline;
    padding-left: 2rem;
}

.title {
    text-align: center;
}

.area {
    position: fixed;
    top: 4.73rem;
    left: 0%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 100%;
}

</style>