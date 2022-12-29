<script lang="ts">

    import YearWidget from './YearWidget.vue';

    export default {
        components: {
            YearWidget
        },
        props: {
            institution: String,
            degree: String,
            start_year: Number,
            end_year: Number
        }
    }

</script>

<template>
    <div class="institution">
        <h5 class="institution-name">
            {{ institution }}
        </h5>
        <p class="sub-text">
            {{ degree }}
        </p>
        <YearWidget  class="years-enrolled" :start_year="start_year" :end_year="end_year" />
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .institution {
        display: flex;
        flex-direction: column;
    }
    .years-enrolled {
        margin-top: 4px;
    }
}

@media only screen and (min-width: 600px) {
    .institution {
        display: grid;
        grid-template-columns: 1fr min-content;
        grid-template-rows: 1fr 1fr;
        column-gap: 10px;
    }
    .institution-name {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .years-enrolled {
        margin-top: 0;
        grid-row-start: 1;
        grid-row-end: span 3;
        grid-column-start: 2;
        grid-column-end: span 3;
        align-self: center;
    }
}


</style>