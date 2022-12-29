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
                whitesheet: whitesheet_json,
                selected_skill_set: whitesheet_json.whitesheet.skills[0].label,
                shown_skill_set: whitesheet_json.whitesheet.skills[0].technolgoies,
            }
        },
        computed: {

        },
        watch: {
            selected_skill_set() {
                console.log(this.whitesheet.whitesheet.skills.filter((area => {
                    if (area.label === this.selected_skill_set) {
                        this.shown_skill_set = area.technolgoies
                    }
                })))

                console.log(this.shown_skill_set)
            }

        },
        methods: {
            select_skill(skill: string) {
                this.selected_skill_set = skill
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
            <div class="skill-selector">
                <button @click="select_skill(area.label)" class="skill-selection" :class="{area_active: selected_skill_set === area.label}" v-for="area in whitesheet.whitesheet.skills" :key="area.label">
                    {{  area.label }}
                </button>
            </div>
            <div>
                <Transition name="fade">
                    <TechnologySet 
                        :technologies="shown_skill_set" 
                        :label="selected_skill_set" 
                    />
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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

    .skill-selector {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 6px;
    }
    .skill-selection {
        border-radius: 4px;
        border: 2px solid lightgray;
        color: #9b9b9b;
        padding: 4px;
        background: none;
        text-align: left;
        font-size: 0.6rem;
        font-weight: 300;
    }
    .skill-selection:hover {
        background: lightgray;
        transition: ease-in 0.1s background;
    }
    .area_active {
        background: black;
        color: white;
        border-color: black;
    }
    .area_active:hover {
        background: black;
        color: white;
        border-color: black;
    }
    
}

@media only screen and (min-width: 600px) {
    .skill-selector {
        display: grid;
        width: calc(100% - 110px);
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin-bottom: 6px;
    }
}
</style>
