<script >
import ID_logo_dark from "$lib/assets/ID_logo_grey.png";
import ID_logo_white from "$lib/assets/ID_logo_white.png";
import { ArrowLeft, ExternalLink } from "radix-icons-svelte";
import { page } from "$app/stores";
import { title } from "$lib/scripts/store.js"
    import { text } from "svelte/internal";

const paths = ["Projects"]
const PAGE_TITLE = "Ian Davey"
/** @type {string} */
let folderName;

/** @type {boolean} */
let isSubpage = false;

/** @type {string} */
let subpageName = "";

/** @type {boolean} */
let hoverLogo = false;

/**
 * Updates the current path information.
 */
function updateCurrentPathInfo() {
    const pathParts = $page.route.id;
    
    const split_path = pathParts.split("/");
    folderName = split_path[1];
    isSubpage = split_path.length > 2;

    if (isSubpage) {
      console.log(pathParts)
      subpageName = split_path[split_path.length - 2];
    }
    

  folderName = folderName === "" ? "Home" : folderName;
}

/**
 * Sets the current page name.
 * @param {string} pageName
 */
function setPage(pageName) {
  folderName = pageName;
}

// Reactively update path information whenever $page changes
$: {
  updateCurrentPathInfo();
}

/**
 * Sets the hoverLogo to true.
 */
function focusLogo() {
  hoverLogo = true;
}

/**
 * Sets the hoverLogo to false.
 */
function unfocusLogo() {
  hoverLogo = false;
}

</script>

<div>
  <div class="top-bar-container">
    <header class="top-bar-navbar-interactive">
      <div class="logo-arrow-container"> 
        <a href="/{subpageName.toLowerCase()}" class="logo-arrow-container" on:click={() => {setPage(subpageName.toLowerCase())}} style="opacity: {isSubpage ? 1 : 0}; pointer-events: {isSubpage ? 'auto' : 'none'};"><ArrowLeft color="white" size={40}/></a>
          <span class="logo-spacer"></span>

      </div>

      <!-- center thew page-title-->
      <div class="page-title">
        {$title}
      </div>

      <div class="top-bar-desktop-menu">
        <nav class="top-bar-nav">
          <a href="/" class="{folderName == 'Home' ? 'top-bar-navlink-selected': 'top-bar-navlink'}" on:click={() => {setPage('Home')}}>Home</a>
          {#each paths as path}
            <a href="/{path.toLowerCase()}" class="{path.toLowerCase() == folderName ? 'top-bar-navlink-selected': 'top-bar-navlink'}"  on:click={() => {setPage(path.toLowerCase())}}>{path}</a> 
          {/each}
                      <div class="flex flex-row  justify-center overflow-none">
                        <a class="top-bar-navlink pr-1" href="/ian-davey-resume.pdf" target="_blank" rel="noopener noreferrer">
                          CV
                        </a>
                        <ExternalLink color="White"/>
                      </div>

      </div>
      <div class="top-bar-burger-menu">
        <svg viewBox="0 0 1024 1024" class="top-bar-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</div>
<div class="toolbar-spacer"></div>

<style>
.top-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D9D9D9;
  z-index: 2;
}
.top-bar-navbar-interactive {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: 0px;
  justify-content: space-between;
  background-color: #252525;
}

.top-bar-desktop-menu {
  display: flex;
  flex: 1; /* Add this line */
  justify-content: flex-end; /* Add this line */
}

.top-bar-nav {
flex: 0 0 auto;
display: flex;
align-items: center;
flex-direction: row;
gap: 1rem;
}

.top-bar-navlink {
color: rgb(173, 173, 173);
cursor: pointer;
transition: 0.3s;
text-decoration: none;
}
.top-bar-navlink:hover {
color: #ffffff;
cursor: pointer;
}
.top-bar-navlink-selected {
  color: #ffffff;
  cursor: default;
}

.top-bar-burger-menu {
display: none;
align-items: center;
justify-content: center;
}
.top-bar-icon {
width: var(--dl-size-size-xsmall);
height: var(--dl-size-size-xsmall);
/*make the flex smallest possible*/
}


  .logo-spacer {
    height: 4.5rem;
    display: inline-block;
  }
  .toolbar-spacer {
    height: 4.2rem;
    display: inline-block;
  }
  .logo-arrow-container {
  display: flex;
  align-items: center;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  margin-left: 1rem;
  flex: 2; /* Add this line */
  text-align: center; /* Add this line */
}
</style>
