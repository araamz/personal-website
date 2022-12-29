<script lang="ts">
    export default {
        props: {
            level: Number,
        },
        computed: {
            skill_level() {
                if (this.level === 0) {
                    return "Beginner"
                } else if (this.level === 1) {
                    return "Intermediate"
                } else {
                    return "Advanced"
                }
            }
        }
    }
</script>

<template>
    <div class="skill">
        <p>
            {{ skill_level }}
        </p>
    </div>
</template>

<style>
.skill {
    background: black;
    padding: 3px 6px;
    border-radius: 4px;
    height: min-content;
}
.skill > p {
    font-size: 0.6rem;
    color: white;
    text-align: center;
}

@media only screen and (min-width: 300px) {
    .skill {
        width: fit-content;

    }
}
@media only screen and (min-width: 600px) {
    .skill {
        min-width: 100px;
    }
}
</style>