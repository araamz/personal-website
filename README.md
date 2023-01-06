# Personal Website 
This is code behind my personal website found at *azaremehrjardi.dev*. The website uses Vue.js and Vue Router for its implementation with data being read from JSON files found within the *src/assets/information* folder in which correspond to their respective pages.

## General Layout of the Application
The general layout of the application features the use of routing to create a SPA-liek application with composition taht makes up the overall pages. 

### Application Routes
The application has three main routes being of the following below:
* / (whitesheet page)
* /projects (projects page)
* /contact (contacts page)

### Outbound Traffic and GitHub API Use
The application uses the GitHub API to display the latest three commits for each project in the */projects* page. The logic to access the API can be found in the **Project.vue** component file. When the page is first loaded and the request is still processing, a temporary **<div>** is displayed untill the *commits_loading* variable is set to *false* in which the **<div>** gets conditionally removed by *v-if* directive. If there is a error getting the commits for each project then another variable is set being *commits_error* in which is set to *true* thus a **<div>** is conditionally rendered to show a error has occured. 