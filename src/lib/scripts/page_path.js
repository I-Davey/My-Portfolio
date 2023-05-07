import { page } from '$app/stores';  

$: {
    
    let current_path = $page.route.id
    folderName = current_path ? current_path.split('/')[1] : "root";
  }