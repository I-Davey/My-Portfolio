<script>
  import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
  setTitle("About");

  const t1 = "Hi, I'm Ian Davey";
  const t2 = "I'm a passionate Python developer with three years of experience, eager to learn, grow, and add value to companies in the tech industry";

const p1 = "Ever since I started my journey in software development, Python has been my go-to programming language. Throughout my career, I have had the opportunity to work on diverse projects, which enabled me to sharpen my skills in Python application development, API integration, process automation, and web scraping. My aptitude for rapid learning and adaptability has empowered me to confront challenges directly and make valuable contributions to my teams.";
const p2 = "When I'm not coding, I love spending time with my cat and going to the beach. There's nothing more relaxing than feeling the sand between my toes and listening to the sound of the waves. My cat is my constant companion, and I enjoy playing with her and watching her explore the world around her. I'm also always learning and keeping up-to-date with the latest technologies and trends in the industry. I believe that staying informed and curious is key to being a successful developer, and I'm always looking for new ideas and inspiration to bring to my work."; 
 const p3 = "If you're looking for a skilled and passionate Full-Stack Web Developer to join your team, I'd love to hear from you. Please feel free to <a href='mailto:your-email@example.com'>contact me</a> to discuss how I can help your business grow.";

  const image1 = "https://via.placeholder.com/400x300.png?text=Project+1";
  const image2 = "https://via.placeholder.com/400x300.png?text=Project+2";
  const image3 = "https://via.placeholder.com/400x300.png?text=Project+3";


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
    <h1 class="center">Hi, I'm Ian Davey</h1>   
    <p class="center">I'm a passionate Python developer with three years of experience, eager to learn, grow, and add value to companies in the tech industry</p>
    </div>
</div>

  <div class="content">


    <div class="row">
      <div class="left">
        <div class = "image_container">
            <ImageCard title="Folium Map" image_src="/about_pics/folium_map.jpg" image_link="#" description="A Folium map that displays the location of all the jobs in the database, with a marker for each job. The marker is clickable and displays the job details / visual in a popup."></ImageCard>
        </div>
      </div>
      <div class="right">
        <div class="textbox">
            <p>Ever since I started my journey in software development, Python has been my go-to programming language. Throughout my career, I have had the opportunity to work on diverse projects, which enabled me to sharpen my skills in Python application development, API integration, process automation, and web scraping. My aptitude for rapid learning and adaptability has empowered me to confront challenges directly and make valuable contributions to my teams.</p>
        </div>
      </div>
    </div>
    
    <div class="spacer"></div>

    {#if ismobile}
    <div class="row">
        <div class="left">
            <div class = "image_container">
                <ImageCard title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#" description="A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time."></ImageCard>
            </div>
        </div>
        <div class="right">
            <div class="textbox">
                <p>I'm always learning and keeping up-to-date with the latest technologies and trends in the industry. I believe that staying informed and curious is key to being a successful developer, and I'm always looking for new ideas and inspiration to bring to my work. I am also heavily invested in utilizing tools like ChatGPT and GitHub Copilot to enhance my development process, streamline my workflow, and ensure that I deliver high-quality solutions for my projects.</p>
            </div>
        </div>
    </div>
    {:else}
    <div class="row">
        <div class="left">
            <div class="textbox">
                <p>I'm always learning and keeping up-to-date with the latest technologies and trends in the industry. I believe that staying informed and curious is key to being a successful developer, and I'm always looking for new ideas and inspiration to bring to my work. I am also heavily invested in utilizing tools like ChatGPT and GitHub Copilot to enhance my development process, streamline my workflow, and ensure that I deliver high-quality solutions for my projects.</p>
            </div>    
        </div>
        <div class="right">
            <div class = "image_container">
                <ImageCard title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#" description="A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time."></ImageCard>
            </div>
        </div>
    </div>
    {/if}

    <div class="spacer"></div>
    
    <div class="row">
      <div class="left">
        <div class = "image_container">
            <ImageCard title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" description="A Telegram bot that enables real-time job creation and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM"></ImageCard>
        </div>
      </div>
      <div class="right">
        <div class="textbox">
            <p>If you're looking for a skilled and passionate Python Developer to join your team, I'd love to hear from you. Please feel free to <a href='mailto:your-email@example.com'>contact me</a> to discuss how I can help your business grow.</p>
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
