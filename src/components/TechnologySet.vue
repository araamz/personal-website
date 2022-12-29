<script lang="ts">

    type technology_item = {
        technology: string,
        level: number,
        takeaways: {
            type: Array<String>
        }
    }

    import Technology from '../components/Technology.vue'

    export default {
        components: {
            Technology
        },
        props: ['technologies', 'label']
    }


</script>

<template>
    <div class="technology-set">
        <h4>
            {{ label }}
        </h4>
        <div class="technology-items">
            <Technology v-for="technology in technologies" 
            :technology="technology.technology"
            :level="technology.level"
            :takeaways="technology.takeaways"
            />
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
    .technology-set {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .technology-items {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

@media only screen and (min-width: 600px) {

}
</style>