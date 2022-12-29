<script lang="ts">

    import YearWidget from '../components/YearWidget.vue'

    export default {
        components: {
            YearWidget
        },
        props: {
            title: String,
            description: String,
            start_year: Number,
            end_year: Number,
            takeaways: {
                type: Array<String>
            }
        }
    }

</script>

<template>
    <div class="job">
        <h5 class="job-title">
            {{ title }}
        </h5>
        <YearWidget class="years-worked" :start_year="start_year" :end_year="end_year" />
        <p class="job-description">
            {{ description }}
        </p>
        <ul class="takeaways">
            <li v-for="takeaway in takeaways">
                {{ takeaway }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .job {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
}

@media only screen and (min-width: 600px) {
    .job {
        display: grid;
        grid-template-columns: 1fr min-content;
        grid-template-rows: min-content min-content min-content;
        column-gap: 10px;
        row-gap: 3px;
    }
    .job-title {
        align-self: center;
    }
    .years-worked {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: span 3;
    }
    .job-description {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .takeaways {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
    }
}


</style>