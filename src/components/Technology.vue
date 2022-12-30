<script lang="ts">

    import SkillWidget from './SkillWidget.vue';

    export default {
        components: {
            SkillWidget
        },
        props: ['technology', 'level', 'takeaways']
    }
</script>

<template>
    <div class="technology">
        <h5 class="technology-title">
            {{ technology }}
        </h5>
        <SkillWidget class="skill-level" :level="level" />
        <ul class="takeaways">
            <li v-for="takeaway in takeaways">
                {{ takeaway }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .technology {
        display: grid;
        grid-template-columns: 1fr min-content;
        grid-template-rows: min-content min-content;
        column-gap: 10px;
        row-gap: 3px;
    }
    .technology-title {
        align-self: center;
    }
    .takeaways {
        margin-top: 0;
    }
    
}
</style>