<script setup lang="ts">

</script>

<template>
    <nav>
        <p>Navigation </p>
        <div>
            <slot name="whitesheet_router_link"></slot>
        </div>
        <div>
            <slot name="projects_router_link"></slot>
        </div>
        <div>
            <slot name="contact_router_link"></slot>
        </div>
    </nav>
</template>

<style scoped>

@media only screen and (min-width: 300px) {

    nav {

        

    }
    nav.div {



    }
    nav.div.a {



    }

}

@media only screen and (min-width: 600px) {

}
</style>
