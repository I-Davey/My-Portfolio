<script >
    import ID_logo_dark from "$lib/assets/ID_logo_grey.png"
    
    import { page } from '$app/stores';  

    const paths = ['About', 'Creations', 'Contacts', 'Links']

    /** @type {string} */
    let folderName;

    
    function findCurrentPathOption() {
      // Check if root path
      // @ts-ignore
      const pathParts = $page.route.id.split('/');
      console.log(pathParts)
      
      // Return 'Home' if it's the root path, otherwise return the first element
      folderName = pathParts[1];
      folderName = folderName === '' ? 'Home' : folderName;
      console.log(folderName)
    }

      /**
     * @param {string} pageName
     */
      function setPage(pageName) {
        folderName = pageName;
      }

    $ : findCurrentPathOption();



</script>

<style>
  .top-bar-container {
width: 100%;
height: 100%;
display: flex;
position: relative;
align-items: flex-start;
flex-direction: column;
background-color: #D9D9D9;
}
.top-bar-navbar-interactive {
color: var(--dl-color-gray-black);
width: 100%;
display: flex;
align-items: center;
padding-top: 0px;
padding-left: var(--dl-space-space-threeunits);
padding-right: var(--dl-space-space-threeunits);
padding-bottom: 0px;
justify-content: space-between;
background-color: #252525;
}
.top-bar-logo {
height: 4.5rem;
transition: 0.3s;
}

.top-bar-desktop-menu {
display: flex;
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
}


@media(max-width: 991px) {
.top-bar-logo {
  height: 4.5rem;
}
}
@media(max-width: 767px) {
  .top-bar-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .top-bar-logo {
    height: 4.5rem;
  }
  .top-bar-desktop-menu {
    display: none;
  }

  .top-bar-burger-menu {
    display: flex;
  }


}
@media(max-width: 479px) {
.top-bar-navbar-interactive {
  padding: 0px;
}
.top-bar-logo {
  height: 4.5rem;
}

}

</style>

<div>
  <div class="top-bar-container">
    <header data-thq="thq-navbar" class="top-bar-navbar-interactive">
      <img alt="logo" src="{ID_logo_dark}" class="top-bar-logo"/>
      <div class="top-bar-desktop-menu">
        <nav data-thq="thq-navbar-nav-links"  data-role="Nav" class="top-bar-nav">
          <a href="/" class="{folderName == 'Home' ? 'top-bar-navlink-selected': 'top-bar-navlink'}" on:click={() => {setPage('Home')}}>Home</a>
          {#each paths as path}
            <a href="{path.toLowerCase()}" class="{path.toLowerCase() == folderName ? 'top-bar-navlink-selected': 'top-bar-navlink'}"  on:click={() => {setPage(path.toLowerCase())}}>{path}</a> 
          {/each}
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="top-bar-burger-menu">
        <svg viewBox="0 0 1024 1024" class="top-bar-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
</div>

