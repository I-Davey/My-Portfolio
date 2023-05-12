<script>
  import { setTitle } from "lib/scripts/store";
  import { onDestroy, onMount } from "svelte";
  import Project from "$lib/components/Project.svelte";
  import ProjectMobile from "lib/components/ProjectMobile.svelte";
  setTitle("Projects");

  let ismobile = false;

  function checkMobile() {
    if (window.innerWidth <= 768) {
      ismobile = true;
    } else {
      ismobile = false;
    }
  }

  onMount(() => {
    console.log("mounted");
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", checkMobile);
    }
  });

  const projects = [
    {
      title: "Folium Map",
      description:
        "A Folium map that displays the location of all the jobs in the database, with a marker for each job. The marker is clickable and displays the job details / visual in a popup.",
      image_src: "/about_pics/folium_map.jpg",
      path: "/projects/folium_map",
      info: "Python - PyScript - Folium",
    },
    {
      title: "Data Visualisation",
      description:
        "A data visualisation that displays the number of jobs created per day, with a line graph that shows the trend over time.",
      image_src: "https://placehold.co/600x400?text=Visualisation+Job",
      path: "#",
      info: "Python - Pandas - APIs",
    },
    {
      title: "Telegram -> CRM Bot",
      description:
        "A Telegram bot that enables real-time job project and collaboration within a conversation, making it easy for multiple people to participate and enter job details directly into the CRM",
      image_src: "/about_pics/telegram_bot.jpg",
      path: "#",
      info: "Python - Telegram - Process Automation",
    },
    {
      title: "Grocery Scraper",
      description:
        "A web scraper that scrapes the grocery store website for the latest prices and availability of products, and stores the data in a database.",
      image_src: "https://placehold.co/600x400?text=Grocery+Scraper",
      path: "#",
      info: "Python - Selenium - Web Scraping",
    },
  ];

  let outerWidth = 0;
  let outerHeight = 0;
</script>

<svelte:window bind:outerWidth bind:outerHeight />

<section class="bg-gradient-to-b from-black to-zinc-600 all-data">
  <div class="flex justify-center">
    <h1
      class="
      text-4xl
      font-bold
      mb-12
      mt-12
      text-center
      "
    >
      My Projects
      <br />
      (WORK IN PROGRESS)
    </h1>
  </div>

  <div class="content flex justify-center w-full min-w-screen">
    {#if outerWidth > 800}
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full">
        {#each projects as project}
          <div class="md:px-8 px-16 py-8">
            <Project
              title={project.title}
              description={project.description}
              image_src={project.image_src}
              image_link={project.path}
              info={project.info}
            />
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-1 w-full">
        {#each projects as project}
          <div class="px-8 py-14">
            <ProjectMobile
              title={project.title}
              description={project.description}
              image_src={project.image_src}
              image_link={"/"}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .all-data {
    left: 0%;
    margin: 0;
    padding: 2rem;
    min-width: 100%;
    position: absolute;
  }
</style>
