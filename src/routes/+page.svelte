<script>
    import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
    import Project from "lib/components/Project.svelte";
    import Skill from "lib/components/Skill.svelte";
    setTitle("Ian Davey - Portfolio");

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


<div class="all-data"> 

<section id="about">
    <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hi, I'm Ian.
        <br class="hidden lg:inline-block" />         
        Python Engineer & Innovator           
        </h1>
        <p class="mb-8 leading-relaxed">
        I'm a passionate Python developer with extensive experience, eager to learn, grow, and add value to companies in the tech industry
        </p>
        <a
            href="/contact"
            class=" inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-300 hover:text-black rounded text-lg">
            Contact Me
        </a>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        
    </div>
    </div>
</section>
<section id="projects" class="text-gray-400 bg-zinc-800 body-font">
      <div class="container px-5 py-10 mx-auto text-center lg:px-40">
        <div class="flex flex-col w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
            <Project title="Folium Map" image_src="/about_pics/folium_map.jpg" image_link="./projects/folium_map" description="test"/>
            <Project title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#" description="test"/>
            <Project title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" description="test"/>
            <Project title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" description="test"/>


        </div>
      </div>
</section>


<section id="skills">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <Skill skill="Python"/>
            <Skill skill="Github Copilot"/>
            <Skill skill="Fastapi"/>
            <Skill skill="ChatGPT"/>            
            <Skill skill="Svelte"/>
            <Skill skill="API Integration"/>


        </div>
      </div>
    </section>

    <section id="projects" class="text-gray-400 bg-zinc-600 body-font">
      <div class="container px-5 py-10 mx-auto text-center lg:px-40">
        <div class="flex flex-col w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Look Around
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 space-y-4">
            <button class="links " on:click={() => {goto("projects")}}>My Projects</button>
            <button class="links disabled">Contact Me</button>
            <button class="links disabled">My Links</button>

        </div>
      </div>
      <div class="h-64">
    
</div>
</section>


<!-- add spacing to bottom-->

</div>




    
<style>
.containerer {
    top: 25%;
    left: 25%;
    margin: 0;
    padding: 0;
    align-items: center;

    width: 70rem;
}

.container_links{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 2rem;
}

.links{
    background-color: #252525;
    width: 100%;
    padding: 20px;
    align-items: center;
    text-decoration: none;
    color: white;
    transition-duration: 0.5s;
    font-size: 1rem;
    font-family: 'Fira Code', monospace;
    

}

.container .links.disabled {
  color: #808080 !important;
  cursor: not-allowed;
}

.links:not(.disabled) {
    /*change this to 20 when all links are enabled*/
    padding: 25px;

}

.links:not(.disabled):hover {
    
    background-color: #e6e6e6;
    color:#222831;
    transition-duration: 0.5s;
    transform: scale(1.05, 1.1);
}

    .all-data {
            left: 0%;
            margin: 0;
            padding: 0;
            min-width: 100%;
            position: absolute;
            background-color: #181818;
    }

  .about-container {
    color: white;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .header {
    text-align: center;
    margin-bottom: 2rem;
    margin-left: 10rem;
  }



.row-box {
    width: 30rem;
    text-align: start;
}
.center {
    text-align: center;
    margin: 0 auto;
  }

.textbox {
    padding: 1rem;
    background-color: #252525;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    display: flex;
}



</style>
