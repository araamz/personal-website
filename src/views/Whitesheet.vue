<script lang="ts">
    import whitesheet_json from '../assets/information/whitesheet.json'

    export default {
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
            <p class="body-text">
                {{  whitesheet.whitesheet.biography.body }}
            </p>
        </div>
        <div class="section">
            <h3>
                Education
            </h3>
            <div>
                <div v-for="institution in whitesheet.whitesheet.education">
                    <p>
                        {{ institution.university }}
                    </p>
                    <p>
                        {{  institution.degree }}
                    </p>
                    <p>
                        GPA: {{  institution.gpa }}
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <h3>
                Experience 
            </h3>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
        <div class="section">
            <h3>
                Skills
            </h3>
            <div></div>
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
        gap: 6px;
        flex-direction: column
    }
    .body-text {
    }
    p {
        font-size: 0.7rem;
        line-height: 1rem;
        text-align: justify;
    }

    
}

@media only screen and (min-width: 600px) {

}
</style>
