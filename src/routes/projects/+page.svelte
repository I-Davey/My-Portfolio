<script>
  import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
  setTitle("Projects");

    let ismobile = false;

    // check if screen size is mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            ismobile = true;
        } else {
            ismobile = false;
        }
    }

    // call checkMobile on page load and resize
    //if not window
        //wait for window to load with promise

    onMount(() => {

        console.log('mounted');
        checkMobile();
        window.addEventListener('resize', checkMobile);
    });

    // remove event listener on page unload
    onDestroy(() => {
        //check if var window even exists
         if (typeof window !== 'undefined') {
                window.removeEventListener('resize', checkMobile);
        }   
        
    });

</script>





<div class="about-container">
  <div class="header">
    <div class="textbox">
    <h1 class="center" style="padding-left:2rem;padding-right:2rem;padding-bottom:1rem;padding-top:1rem;">My Projects</h1>   
    </div>
</div>

  <div class="content">


    <div class="row">
      <div class="left">
        <div class = "image_container">
            <ImageCard title="Folium Map" image_src="/about_pics/folium_map.jpg" image_link="./projects/folium_map"></ImageCard>
        </div>
      </div>
      <div class="right">
        <div class="textbox">
          A Folium map that displays the location of all the jobs in the database, with a marker for each job. The marker is clickable and displays the job details / visual in a popup."
        </div>
      </div>
    </div>
    
    <div class="spacer"></div>

    <div class="row">
        <div class="left">
            <div class = "image_container">
                <ImageCard title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#"></ImageCard>
            </div>
        </div>
        <div class="right">
            <div class="textbox">
                <p>A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time.</p>
            </div>    

        </div>
    </div>


    <div class="spacer"></div>
    
    <div class="row">
      <div class="left">
        <div class = "image_container">
            <ImageCard title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#"></ImageCard>
        </div>
      </div>
      <div class="right">
            <div class="textbox" >
            <p>A Telegram bot that enables real-time job project and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM</p>
        </div>

      </div>
    </div>
  </div>
</div>


<style>
  .about-container {
    background-color: #525252;
    color: white;
    font-family: Arial, sans-serif;
    padding: 2rem;
    line-height: 1.5;
    max-width: 90rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }

  .content {
    margin-top: 2rem;
    width: 100%;
  }

  
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .left {
    width: 45%;
    order: 1;
  }

  .right {
    width: 45%;
    order: 2;
  }

    .image_container {
        max-width: 80rem;
    }

.textbox {
    padding: 1rem;
    background-color: #252525;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {

    .textbox {
        margin-bottom: 2rem;
        margin-top: 0rem;
        border-top-left-radius: 0rem;
        border-top-right-radius: 0rem;
         background: linear-gradient(to bottom, rgba(37, 37, 37, 1), rgba(0,0,0, 1));
    }
  .about-container{
    padding: 0%;
    width: 100%;
  }

  .row {
    flex-direction: column;
    text-align: center;
    justify-items: center;
    padding-left: 2%;
    width: 98%;

  }

  .left,
  .right {
    width: 100%;
    text-align: center; /* add this line */
    justify-self: center;
  }



}


  .spacer {
    height: 4rem;
  }
</style>
