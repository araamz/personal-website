<script lang="ts">

    import Tag from './Tag.vue';

    export default {

        components: {
            Tag
        },
        props: {
            name: String,
            description: String,
            thumbnail: String || null,
            repository: String,
            tags: {
                type: Array<String>
            }
        },

        created() {
            console.log(this.thumbnail)
        }
    }

</script>

<template>
    <div class="project">
        <h3>
            {{ name }}
        </h3>
        <p>
            {{ description }}
        </p>
        <img class="thumbnail" :src="thumbnail" v-if="thumbnail" />
        <div class="no_thumbnail" v-else>
            <p>
                Thumbnail Not Provided.
            </p>
        </div>
        <a :href="repository"> Go to {{ name }} Repository </a>
        <div>
            <Tag v-for="tag in tags" :label="tag" />
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .thumbnail {
        height: 160px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 0 5px 8px 1px lightgray;
    }
    .project {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .no_thumbnail {

        height: 160px;
        border: 2px dotted lightgray; 
        border-radius: 4px;
        display: flex; 
    }
    .no_thumbnail > p {
        align-self: center;
        width: 100%;
        text-align: center;
        font-size: 0.5rem;
        color: #9b9b9b;
    }
}
@media only screen and (min-width: 600px) {

}
</style>