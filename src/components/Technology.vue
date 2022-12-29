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
        <h5>
            {{ technology }}
        </h5>
        <SkillWidget :level="level" />
        <ul>
            <li v-for="takeaway in takeaways">
                {{ takeaway }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .technology {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
}
</style>