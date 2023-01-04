<script lang="ts">

    import Tag from './Tag.vue';

    export default {

        components: {
            Tag
        },
        props: {
            name: String,
            description: String,
            thumbnail: String,
            repository: String,
            tags: {
                type: Array<String>
            }
        }
    }

</script>

<template>
    <div>
        <h3>
            {{ name }}
        </h3>
        <p>
            {{ description }}
        </p>
        <img v-if="thumbnail" :src="thumbnail" />
        <div v-else>
            Thumbnail Not Provided
        </div>
        <a :href="repository"> Go to {{ name }} Repository </a>
        <div>
            <Tag v-for="tag in tags" :label="tag" />
        </div>
    </div>
</template>

<style scoped>

</style>