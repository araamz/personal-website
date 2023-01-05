<script lang="ts">

    export default {
        props: {
            date: String,
            message: String
        },
        computed: {
            formatted_date() {
                return "Tuesday"
            }
        }
    }

</script>

<template>

    <div>
        <p>
            {{ formatted_date }}
        </p>
    </div>

</template>

<style scoped>

</style>