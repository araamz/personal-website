<script lang="ts">
    
    export default {
        props: {
            type: {
                default: 0,
                type: Number
            },
            label: String,
            description: String,
            link: String,
            handle: String
        },
        computed: {
            email_link() {
                return `mailto:${this.link}`
            }
        }
    }

</script>

<template>
    <div class="contact">
        <h3 class="label">
            {{ label }}
        </h3>
        <p class="description">
            {{  description }}
        </p>
        <a v-if="type === 0" class="link" :href="email_link" type="email">
            <p>
                {{ link }}
            </p>
        </a>
        <a v-else class="link" :href="link" type="email">
            <p>
                {{ handle }}
            </p>
        </a>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .contact {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .link {
        background: black;
        padding: 3px 6px;
        border-radius: 4px;
        height: min-content;
        width: fit-content;
        text-decoration: none;
    }
    .link > p {
        font-size: 0.6rem;
        color: white;
        text-align: center;
    }

}
@media only screen and (min-width: 600px) {
    .contact {
        display: grid;
        grid-template-columns: 1fr max-content;
        grid-template-rows: min-content min-content;
        column-gap: 14px;
    }
    .label {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    .description {
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .link {
        grid-row-start: 1;
        grid-row-end: span 3;
        align-self: center;
    }
}
</style>