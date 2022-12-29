<script lang="ts">

    export default {
        props: {
            start_year: Number,
            end_year: Number
        }
    }

</script>

<template>
    <div class="year">
        <p v-if="end_year">
            {{ start_year }} - {{ end_year }}
        </p>
        <p v-else>
            {{ start_year }} - Present
        </p>
    </div>
</template>

<style scoped>

.year {
    background: black;
    padding: 3px 6px;
    border-radius: 4px;
    height: min-content;
}
.year > p {
    font-size: 0.6rem;
    color: white;
    text-align: center;
}

@media only screen and (min-width: 300px) {
    .year {
        width: fit-content;

    }
}
@media only screen and (min-width: 600px) {
    .year {
        min-width: 100px;
    }
}

</style>