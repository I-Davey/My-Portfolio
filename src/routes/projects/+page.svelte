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
      title: "Project 1",
      description: "This is project 1",
      image: "https://placehold.co/600x400",
      info: "temp",
    },
    {
      title: "Project 2",
      description: "This is project 2",
      image: "https://placehold.co/600x400",
      info: "temp",
    },
    {
      title: "Project 3",
      description: "This is project 3",
      image: "https://placehold.co/600x400",
      info: "temp",
    },
    {
      title: "Project 4",
      description: "This is project 4",
      image: "https://placehold.co/600x400",
      info: "temp",
    },
    {
      title: "Project 5",
      description: "This is project 5",
      image: "https://placehold.co/600x400",
      info: "temp",
    },
    {
      title: "Project 6",
      description: "This is project 6",
      image: "https://placehold.co/600x400",
      info: "temp",
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
    </h1>
  </div>

    <div class="content flex justify-center w-full min-w-screen">
      {#if outerWidth > 800}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {#each projects as project}
            <div class="md:px-8 px-16 py-8">
              <Project
                title={project.title}
                description={project.description}
                image_src={project.image}
                image_link={"/"}
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
                image_src={project.image}
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
