<script lang="ts">

    import Tag from './Tag.vue';
    import Commit from './Commit.vue';
    
    const github_access_token: String = import.meta.env.VITE_GITHUB_ACCESS_TOKEN
    
    export default {

        components: {
            Tag,
            Commit
        },
        data() {
            return {
                commits_error: false,
                commits_loading: true,
                commits: Array<any>()
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
        },
        methods: {
            async get_commits() {
                const commit_count: Number = 3
                const url = `https://api.github.com/repos/araamz/${this.repository_name}/commits?per_page=${commit_count}`
                const options = {
                    headers: {
                        "Accept": "application/vnd.github+json",
                        "Authorization": `Bearer ${github_access_token}`
                    }
                }

                const request = await fetch(url, options).then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText)
                    }
                    return response.json()
                }).then(commits => {
                    this.commits = commits
                    this.commits_loading = false
                    this.commits_error = false
                }).catch(error => {
                    this.commits_error = true
                    this.commits_loading = false
                })

            }
        },
        mounted() {
            this.get_commits()

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
                <div v-if="commits_loading" class="commit_loading_message"> </div>
                <div v-if="commits_error" class="commit_error_message">
                    Error Loading Commits.
                </div>
                <Commit 
                    v-if="!commits_error"
                    v-for="commit in commits"
                    :timestamp="commit.commit.author.date" 
                    :message="commit.commit.message"
                />
            </div>
            <a class="repository-link" :href="repository_link"> Go to {{ name }} Repository </a>
        </div>
    </div>
</template>

<style scoped>
@keyframes loading_commits {
    from {
        background: #ededed;
    }
    to {
        background: lightgray;
    }
}
@media only screen and (min-width: 300px) {
    .project {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        column-gap: 24px;
    }
    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .commit_loading_message {
        animation: loading_commits 0.5s ease-in-out 0s infinite alternate both;
        border-radius: 4px;
        width: 100%;
        height: 40px;
    }
    .commit_error_message {
        color: white;
        background: #f080807e;
        border-radius: 4px;
        width: 100%;
        height: 40px;
        display: flex;
        place-content: center;
        place-items: center;
        font-size: 0.5rem;
    }
    .commits > div {
        margin-top: 4px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .repository-link {
        font-size: 0.4rem;
        line-height: 0.5rem !important;
        color: lightgray;
        text-decoration: none;
        transition: all ease 0.2s;
    }
    .repository-link:hover {
        color: black;
        text-decoration: underline;
    }

}
@media only screen and (min-width: 600px) {
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
    }
    .repository_link {
        font-size: 0.5rem;
    }
}
</style>