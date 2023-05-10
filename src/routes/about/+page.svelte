<script>
    import { setTitle } from "lib/scripts/store";
    import { onDestroy, onMount } from "svelte";
    import ImageCard from "lib/components/ImageCard.svelte";
    import Project from "lib/components/Project.svelte";
    import Skill from "lib/components/Skill.svelte";
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

still blank