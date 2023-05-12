<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />

<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Pyscript from "./Pyscript.svelte"
  import { setTitle } from "lib/scripts/store";

  

  let isReady = false;

  let content_template;

    let cur_lat
    let cur_lon
    let type
    let path
    let loc_name


  async function initializePyScript() {
    // @ts-ignore
   await import("https://pyscript.net/latest/pyscript.js");
  }
  /**
   * Keeps track of the previously clicked marker.
   * @type {Object}
   */
  let previousMarker;
  /**
   * Handles the click event on a marker.
   * @param {Event} event - The click event.
   * @param {Object} df - The data frame object.
   */
  function onMarkerClick(event, df) {
    handle_style(event);
    const marker = event.sourceTarget;

    //get the key latling_list from the dictionary
    const key = "( " + marker._latlng.lat + ", " + marker._latlng.lng + " )"
    const row = df[key]
    const popup_object = marker._popup
    cur_lat = marker._latlng.lat
    cur_lon = marker._latlng.lng
    type = row['type']
    path = row['path']
    loc_name = row['loc_name']

    //import the video from path (static/vids/path)


    //append the video to the popup content
    
    
    const popup_content = popup_object._content

    

    console.log(event)
    isReady = true;



    //replace the popup content with the new content (ie the content_template)
    popup_object.setContent(content_template)

  }


  function data_to_bytes(){
    const data = `lat,long,type,path,loc_name,sqm,is_day_job,inbound
                    -37.795089,144.997464,video,1_0.0-3.5.mp4,Timber Fence and Footbridge,25+paint,1,0
                    -37.79505546480804,145.0007712994052,video,1_18.3-24.0.mp4,Merri Creek Perspex,60+paint 40+clean,1,0
                    -37.790808540590426,145.01673487452152,video,2_0.0-1.0.mp4,Gantry,28+paint 9+clean,0,0
                    -37.79088371646998,145.02019737286668,video,4_2.0-3.0.mp4,Yarra Blvd Bridge,40+paint,1,0
                    -37.79101574121566,145.02808137807503,video,4_14.0-15.0.mp4,Chandler Hwy Bridge Pier,18+paint,1,0
                    -37.79049376699086,145.04561960346632,video,4_26.0-27.8.mp4,Timber Sound Fence,60+paint,1,0
                    -37.790725772718574,145.04831103522284,video,4_36.3-37.0.mp4,Belfort Road Abutment,20+paint,1,0
                    -37.7797091591358,145.08611836427315,video,4_80.2-84.0.mp4,Bulleen Road On-Ramp Walls,140+paint,1,0
                    -37.77931668157151,145.0928042960661,video,4_104.0-107.0.mp4,Estelle Street Sound Fence,80+paint,1,0
                    -37.79115940653104,145.10631627923735,video,4_185.0-189.0.mp4,Doncaster Road On-Ramp,400+paint,1,0
                    -37.794842088116404,145.11317051341794,video,4_216.0-219.0.mp4,Elgar Road Ledge,100+paint,1,0
                    -37.79766653623136,145.13681807735244,video,4_303.8-306.0.mp4,Middleborough Road Off-Ramp,30+paint,1,0
                    -37.79884337131002,145.14562540326148,video,4_335.0-336.0.mp4,Middleborough Road On-Ramp,60+paint,1,0
                    -37.799999735719624,145.15069424749095,video,4_353.0-354.0.mp4,Leed Street Sound Wall,15+paint 1+removal,1,0
                    -37.803617783061746,145.1723000736667,video,4_440.0-449.0.mp4,Kett Street Footbridge + Sound Wall,65+paint,1,0
                    -37.80430684947189,145.17427133145597,video,4_485.0-487.5.mp4,Springvale Road On-Ramp,50+paint,1,1
                    -37.80330290371694,145.167931528454,video,4_513.0-516.5.mp4,Travel Times Sign + Wall,30+paint,1,1
                    -37.80157235293802,145.1599225841392,video,4_543.0-547.0.mp4,Blackburn Road,90+paint,1,1
                    -37.80067426660364,145.15228220571618,video,4_575.0-578.0.mp4,VMS Sign + Wall,50+paint,1,1
                    -37.80023769173356,145.14937022023588,video,4_584.0-585.0.mp4,Misc Wall,40+paint,1,1
                    -37.79794087615337,145.13529829332467,video,4_639.85-639.851.mp4,Eram Road Wall,25+paint,1,1
                    -37.797557620627295,145.130998596777,video,4_649.0-651.0.mp4,Tram Road Off-Ramp,50+paint,1,1
                    -37.796375136545485,145.1186709025542,video,4_704.5-704.501.mp4,Elgar Road Bridge,20+paint,1,1
                    -37.79481191587888,145.1111314037463,video,4_733.0-740.0.mp4,Elgar Road On-Ramp,70+paint,1,1
                    -37.7919669034768,145.10643279884764,video,4_757.0-760.0.mp4,Curved Perspex,120+paint,1,1
                    -37.78031085018635,145.08024866875155,video,4_828.0-831.0.mp4,Bulleen Road Off-Ramp,40+paint,1,1
                    -37.781976907954764,145.07513374911784,video,4_846.0-854.0.mp4,Golf Course Access Bridge,3+Clean 6+Paint,1,1
                    -37.7835165040202,145.07204422860542,video,4_862.0-863.0.mp4,Orion Street Fence,20+Paint,1,1
                    -37.79087270760023,145.04355118958586,video,4_882.0-884.0.mp4,Kilby Road Fence,25+Paint,1,1
                    -37.79135744786632,145.02050749649325,video,4_904.0-906.0.mp4,Yarra Blvd Abutment,40+Paint,1,1
                    -37.79598566285253,144.99818341618067,video,4_988.0-1000.0.mp4,Hoddle Street Off-Ramp,400+Paint,1,1
        `;

    //turn data into base64 (use buffer)
    const b64_data = btoa(data);
    return b64_data;
    
  
    }

  
    /**
   * @param {Event} event
  */
  function handle_style(event){
    if (previousMarker) { 
      scaleMarker(previousMarker, 1/1.2);
      previousMarker._icon.style.filter = "";
    }
    const marker = event.sourceTarget;
    scaleMarker(marker, 1.2);
    marker._icon.style.filter = "invert(100%)";
    

    previousMarker = marker;


  }

  /**
   * Scales a marker according to the given scale factor.
   *
   * @param {Object} marker - The marker to be scaled.
   * @param {number} scaleFactor - The scale factor.
   */
  function scaleMarker(marker, scaleFactor) {
    const icon = marker._icon;
    // Extract and parse the current styles.
    const currentStyles = getStyles(icon);
    // Scale the styles.
    const scaledStyles = scaleStyles(currentStyles, scaleFactor);
    // Update the styles.
    setStyles(icon, scaledStyles);
  }

  /**
   * Extracts and parses the current styles of the icon.
   *
   * @param {HTMLElement} icon - The icon element.
   * @returns {Object} The current styles of the icon.
   */
  function getStyles(icon) {
    const width = parseInt(icon.style.width.slice(0, -2));
    const height = parseInt(icon.style.height.slice(0, -2));
    const marginLeft = parseInt(icon.style.marginLeft.slice(0, -2));
    const marginTop = parseInt(icon.style.marginTop.slice(0, -2));

    return { width, height, marginLeft, marginTop };
  }

  /**
   * Scales the styles according to the given scale factor.
   *
   * @param {Object} styles - The styles to be scaled.
   * @param {number} scaleFactor - The scale factor.
   * @returns {Object} The scaled styles.
   */
  function scaleStyles(styles, scaleFactor) {
    return Object.fromEntries(
      Object.entries(styles).map(([key, value]) => [key, Math.round(value * scaleFactor)])
    );
  }

  /**
   * Updates the styles of the icon with the given styles.
   *
   * @param {HTMLElement} icon - The icon element.
   * @param {Object} styles - The styles to be applied.
   * @param {number} styles.width - The width of the icon.
   * @param {number} styles.height - The height of the icon.
   * @param {number} styles.marginLeft - The left margin of the icon.
   * @param {number} styles.marginTop - The top margin of the icon.
   */
  function setStyles(icon, styles) {
    icon.style.width = styles.width + "px";
    icon.style.height = styles.height + "px";
    icon.style.marginLeft = styles.marginLeft + "px";
    icon.style.marginTop = styles.marginTop + "px";
  }


  let content = null;
  onMount(async () => {

  

  });

  let start = false;
  async function make_start() {
    start = true;

    await initializePyScript();

    window.onMarkerClick = onMarkerClick;
    window.currentMarker = null;
    window.b64data = data_to_bytes();
    window.isloaded = false;
    
    while (!window.isloaded) {
      await new Promise(r => setTimeout(r, 100));
    }
    //get the pyscript object in the content div
    let child_pys = content.children[1];
    let child1 = child_pys.children[0].children[0]

    //set it to flex
    child1.style.height = "100%";
    let child2 = child1.children[0];

    console.log(child2);
    //set max height to 90vh

    child2.style.height = "80vh";
    child2.style.width = "90vw";
  }

  setTitle("Folium Map");


</script>



<div class="spacer">
</div>
{#if !start}
<div class="flex justify-center items-center h-screen flex-col">
  <div class="mb-4">
    <h1 class="text-center">This is work in progress. Click the button to render the pyscript map.</h1>
  </div>
  <button class="inline-flex text-black bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 hover:text-black rounded text-lg" on:click={make_start}>Click Me</button>
</div>
{/if}
<div class="area">

  <div class="content" bind:this={content}>
    {#if start}
    <Pyscript />
    {/if}
  </div>

</div>
<div class="content_template" bind:this={content_template} style={isReady ? "" : "display: none"}>
  <h1 style={isReady ? "" : "display: none"}>{loc_name}</h1 >
    {#if path}
    <video src="/vids/{path}" class=".video_frame" width ="480" controls preload="metadata">
      <track kind="captions"/>
      </video>
    {/if}
</div>


<style>
  .area {
    left: 0%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 95vw;
    height: 75%;
  }



  

  .spacer {
    height: 1rem;
  }

  

</style>
