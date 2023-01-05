<script lang="ts">

    import Tag from './Tag.vue';
    import Commit from './Commit.vue';

    export default {

        components: {
            Tag,
            Commit
        },
        data() {
            return {
                commits: [
                    {
                        "date": "2022-11-24T11:18:01Z",
                        "message": "Finished Backend"
                    },
                    {
                        "date": "2022-11-22T07:42:18Z",
                        "message": "Extended Backend API"                  
                    }
                ]
            }
        },
        props: {
            name: String,
            description: String,
            repository_link: String,
            repository_name: String,
            tags: {
                type: Array<String>
            }
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
        <div>
            <p>
                Latest Project Updates
            </p>
            <div>

                <Commit 
                    v-for="commit in commits" 
                    :date="commit.date"
                    :message="commit.message"
                />
            </div>
        </div>
        <a :href="repository_link"> Go to {{ name }} Repository </a>
        <div>
            <Tag v-for="tag in tags" :label="tag" />
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .project {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

}
@media only screen and (min-width: 600px) {

}
</style>