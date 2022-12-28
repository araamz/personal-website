<script setup lang="ts">

</script>

<template>
    <nav>
        <p>Pages</p>
        <div class="navigation-container">
            <RouterLink :to="{ name: 'Whitesheet' }">
                <p class="link_title">📄 Whitesheet</p>
                <p class="link_description">Learn about my biography, skills, and experiences.</p>
            </RouterLink>
            <RouterLink :to="{ name: 'Projects' }">
                <p class="link_title">🛠️ Projects</p>
                <p class="link_description">See my projects that range from embedded to full-stack applications.</p>
            </RouterLink>
            <RouterLink :to="{ name: 'Contact' }">
                <p class="link_title">📞 Contacts</p>
                <p class="link_description">Let's get in touch and talk about what we could do together.</p>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>

@media only screen and (min-width: 300px) {

    nav > p {
        margin-bottom: 8px;
        color: #b6b6b6;
    }
    .navigation-container {

        display: flex;
        flex-direction: column;
        gap: 10px;

    }
    .navigation-container > a {
        text-decoration: none;
        background: white;
        padding: 8px 12px;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .link_description {
        font-size: 0.6rem;
        font-weight: 300;
        color: #9b9b9b;
    }
    .link_title {
        font-size: 0.8rem;
        text-decoration: none;
        color: black;
    }

    .router-link-exact-active {
        background: black !important;
    }

    .router-link-exact-active > p {
        color: white;
    }

}

@media only screen and (min-width: 600px) {

}
</style>
