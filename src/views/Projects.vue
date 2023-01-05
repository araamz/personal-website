<script lang="ts">

    import projects_json from '../assets/information/projects.json'

    import Project from '../components/Project.vue';

    export default {

        components: {
            Project
        },
        data() {
            return {
                projects: projects_json
            }
        }
    }
</script>

<template>
    <div class="projects">
        <Project 
            v-for="project in projects.projects" 
            :name="project.name"
            :description="project.description"
            :repository_link="project.repository_link"
            :repository_name="project.repository_name"
            :tags="project.tags"
        />
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .projects {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
}

@media only screen and (min-width: 600px) {

}
</style>
