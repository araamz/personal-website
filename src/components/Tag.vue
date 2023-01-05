<script lang="ts">

    export default {

        props: ['label']
    }

</script>

<template>
    <div class="tag">
        <p>
            {{ label }}
        </p>
    </div>
</template>

<style scoped>

.tag {
    background: black;
    padding: 3px 6px;
    border-radius: 4px;
    height: min-content;
}
.tag > p {
    font-size: 0.6rem;
    color: white;
    text-align: center;
}

@media only screen and (min-width: 300px) {
    .tag {
        width: fit-content;
    }
}

</style>