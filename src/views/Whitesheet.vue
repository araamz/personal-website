<script lang="ts">

    import whitesheet_json from '../assets/information/whitesheet.json'

    import Institution from '../components/Institution.vue'
    import Job from '../components/Job.vue'
    import TechnologySet from '../components/TechnologySet.vue'

    export default {
        components: {
            Institution,
            Job,
            TechnologySet
        },
        data() {
            return {
                whitesheet: whitesheet_json
            }
        }
    }

</script>

<template>
    <div class="whitesheet">
        <div class="section">
            <h3>
                Biography
            </h3>
            <p>
                {{  whitesheet.whitesheet.biography.body }}
            </p>
        </div>
        <div class="section">
            <h3>
                Education
            </h3>
            <div>
                <Institution 
                    v-for="institution in whitesheet.whitesheet.education" 
                    :institution="institution.institution"  
                    :degree="institution.degree"
                    :start_year="institution.start_year"
                    :end_year="institution.end_year"
                />
            </div>
        </div>
        <div class="section">
            <h3>
                Experience 
            </h3>
            <div class="experience-items">
                <Job
                    v-for="job in whitesheet.whitesheet.experience" 
                    :title="job.title"
                    :description="job.description"
                    :start_year="job.start_year"
                    :end_year="job.end_year"
                    :takeaways="job.takeaways"
                />
            </div>
        </div>
        <div class="section">
            <h3>
                Skills
            </h3>
            <div>
                <TechnologySet v-for="set in whitesheet.whitesheet.skills" :technologies="set" />
            </div>
        </div>
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .whitesheet {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .section {
        display: flex;
        flex-direction: column
    }
    h3 {
        margin-bottom: 6px;
    }
    .experience-items {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    
}

@media only screen and (min-width: 600px) {

}
</style>
