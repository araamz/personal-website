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
                        "date": "2022-11-07T03:11:02Z",
                        "message": "Updated Device Page"
                    },
                    {
                        "date": "2022-11-15T16:58:37Z",
                        "message": "Began Backend"
                    },
                    {
                        "date": "2022-11-16T08:01:56Z",
                        "message": "Developed update_config for /device/config route"
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
        <h3 class="name">
            {{ name }}
        </h3>
        <p class="description">
            {{ description }}
        </p>
        <div class="tags">
            <Tag v-for="tag in tags" :label="tag" />
        </div>
        <div class="commits">
            <p class="sub-text">
                Latest Project Commits
            </p>
            <div>
                <Commit 
                    v-for="commit in commits"
                    :timestamp="commit.date" 
                    :message="commit.message"
                />
            </div>
            <a class="repository_link" :href="repository_link"> Go to {{ name }} Repository </a>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .project {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        column-gap: 24px;
    }
    .tags {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }
    .commits > div {
        margin-top: 4px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .repository_link {
        font-size: 0.4rem;
        color: lightgray;
        text-decoration: none;
        transition: all ease 0.2s;
    }
    .repository_link:hover {
        color: black;
        text-decoration: underline;
    }

}
@media only screen and (min-width: 900px) {
    .project {
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-rows: fit-content fit-content fit-content;
        align-items: start;
    }
    .name {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .description {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .tags {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .commits {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: span 4;
        overflow-y: auto;
    }
}
</style>