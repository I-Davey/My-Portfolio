<script>
    import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
    import Project from "lib/components/Project.svelte";
    import Skill from "lib/components/Skill.svelte";
    import ProjectMobile from "lib/components/ProjectMobile.svelte";
    import { goto } from "$app/navigation";
    import { LinkedinLogo } from "radix-icons-svelte";
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

    //bind currentwidth to a variable
    let outerWidth;
    let outerHeight;
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
<svelte:window  bind:outerWidth bind:outerHeight />

<div class="all-data">
  <section id="about" class="bg-gradient-to-b from-black via-transparent to-zinc-900">
    <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> Hi, I'm Ian. <br class="hidden lg:inline-block" /> Python Engineer & Innovator </h1>
        <p class="mb-8 leading-relaxed"> I'm a passionate Python developer with extensive experience, eager to learn, grow, and add value to companies in the tech industry </p>
        <a href="#contact" class=" inline-flex text-black bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400  hover:text-black rounded text-lg"> Contact Me </a>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
    </div>
  
    <div class="spacer"></div>
    <div class="spacer"></div>

  </section>

  <section id="projects" class="text-gray-400  body-font bg-gradient-to-b from-zinc-900  to-zinc-800" >
    <div class="container px-5 py-10 mx-auto text-center lg:px-40">
      <div class="flex flex-col w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"> Things I've Built </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore. </p>
      </div>
      <p></p> {#if outerWidth > 1000}
        
			<div class="flex flex-wrap -m-4">
				<Project title="Folium Map" image_src="/about_pics/folium_map.jpg" image_link="./projects/folium_map" info="Python - PyScript - Folium" description="A Folium map that displays the location of all the jobs in the database, with a marker for each job. The marker is clickable and displays the job details / visual in a popup."/>
				<Project title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#"  info="Python - Pandas - APIs"  description="A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time."/>
				<Project title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" info="Python - Telegram - Process Automation" description="A Telegram bot that enables real-time job project and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM"/>
				<Project title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" description="A Telegram bot that enables real-time job project and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM"/>
			</div>
        {:else}
          
			<div class="about-container">
				<div class="content">
					<ProjectMobile title="Folium Map" image_src = "/about_pics/folium_map.jpg" image_link="./projects/folium_map" description="A Folium map that displays the location of all the jobs in the database, with a marker for each job. The marker is clickable and displays the job details / visual in a popup."/>
					<div class="spacer"></div>
					<ProjectMobile title="Telegram -> CRM Bot" image_src="/about_pics/telegram_bot.jpg" image_link="#" description="A Telegram bot that enables real-time job project and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM"/>
					<div class="spacer"></div>
					<ProjectMobile title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#" description="A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time."/>
					<div class="spacer"></div>
					<ProjectMobile title="Data Visualisation" image_src="https://via.placeholder.com/400x300.png?text=Data+Visualisation+Gold" image_link="#" description="A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time."/>
				</div>
			</div>
        {/if}

      
		</div>
      <div class="spacer"></div>
  <div class="spacer"></div>

	</section>
	<section id="skills" class="bg-gradient-to-b from-zinc-800 to-zinc-700">
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
				<Skill skill="Jira"/>
				<Skill skill="PostgreSQL"/>
				<Skill skill="SQLite"/>
				<Skill skill="Miro"/>
				<Skill skill="FastAPI"/>
				<Skill skill="Django"/>
				<Skill skill="Folium"/>
				<Skill skill="BeautifulSoup"/>
				<Skill skill="Web Scraping"/>
				<Skill skill="Hosting"/>
				<Skill skill="OnRender"/>
				<Skill skill="Automation"/>
			</div>
		</div>
      <div class="spacer"></div>
  <div class="spacer"></div>

	</section>
	<section id="contact" class="text-gray-400 bg-zinc-700 body-font">
		<div class="container px-5 py-10 mx-auto text-center lg:px-40">
			<div class="flex flex-col w-full mb-20">
				<h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Contact Me
            </h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Let's get in touch! You can reach me through LinkedIn, GitHub, or email.
            </p>
			</div>
			<div class="flex justify-center">
				<a class="contact-links w-1/6" href="https://www.linkedin.com/in/ian-davey-64579b136/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
            </a>
				<a class="contact-links w-1/6" href="https://github.com/I-Davey" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
				<a class="contact-links w-1/6" href="mailto:idaveynz@gmail.com">
                Email
            </a>
			</div>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base pt-20 pb-5">
                Or check out my other stuff:
          </p>
			<div class="flex flex-col w-full mb-20">
				<div class="flex justify-center">
					<a class="contact-links w-1/4" href="/projects">
                My Projects
            </a>
					<a class="contact-links w-1/4" href="/ian-davey-resume.pdf" target="_blank" rel="noopener noreferrer">
                My CV
            </a>
				</div>
			</div>
			
		</div>
          <div class="spacer"></div>
  <div class="spacer"></div>
	</section>

	<!-- add spacing to bottom-->


</div>

    
<style>

.contact-links {
    background-color: #252525;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    transition-duration: 0.5s;
    font-size: 1rem;
    font-family: 'Fira Code', monospace;
}

.contact-links:hover {
    background-color: #e6e6e6;
    color: #222831;
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


.about-container {
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


.content {
  margin-top: 2rem;
  width: 100%;
}


.about-container{
  padding: 0%;
  width: 100%;
}

.spacer {
  height: 4rem;
}
</style>
