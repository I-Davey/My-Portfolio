<script>
  import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
  setTitle("About");

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
    <div class="about-container">
        <div class="header">
                <div class="row-box">
                    <h1>Hi, I'm Ian,</h1>   
                    <h1>Python Engineer & Innovator</h1>  
                    <p>I'm a passionate Python developer with three years of experience, eager to learn, grow, and add value to companies in the tech industry</p>
 
                </div>
            </div>
        </div>


        <div class="textbox">
            <p>I'm always learning and keeping up-to-date with the latest technologies and trends in the industry. I believe that staying informed and curious is key to being a successful developer, and I'm always looking for new ideas and inspiration to bring to my work. I am also heavily invested in utilizing tools like ChatGPT and GitHub Copilot to enhance my development process, streamline my workflow, and ensure that I deliver high-quality solutions for my projects.</p>
            <p>If you're looking for a skilled and passionate Python Developer to join your team, I'd love to hear from you. Please feel free to <a href='mailto:your-email@example.com'>contact me</a> to discuss how I can help your business grow.</p>
            <p>I'm always learning and keeping up-to-date with the latest technologies and trends in the industry. I believe that staying informed and curious is key to being a successful developer, and I'm always looking for new ideas and inspiration to bring to my work. I am also heavily invested in utilizing tools like ChatGPT and GitHub Copilot to enhance my development process, streamline my workflow, and ensure that I deliver high-quality solutions for my projects.</p>
            <p>Ever since I started my journey in software development, Python has been my go-to programming language. Throughout my career, I have had the opportunity to work on diverse projects, which enabled me to sharpen my skills in Python application development, API integration, process automation, and web scraping. My aptitude for rapid learning and adaptability has empowered me to confront challenges directly and make valuable contributions to my teams.</p>
        </div>    
    </div>


<style>

    .all-data {
            left: 0%;
            margin: 0;
            padding: 0;
            min-width: 100%;
            margin-top: 4rem;
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
