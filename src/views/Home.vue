<script setup lang="ts">

</script>

<template>
    <div class="home">
        <div>
            <p class="page_title">📄 Whitesheet.</p>
            <p class="page_description">Learn about my biography, skills, and experiences.</p>
            <button class="page_button">
                See Whitesheet.
            </button>
        </div>
        <div>
            <p class="page_title">🛠️ Projects.</p>
            <p class="page_description">See my projects that range from embedded to full-stack applications.</p>
            <button class="page_button">
                See Projects.
            </button>
        </div>
        <div>
            <p class="page_title">📞 Contact.</p>
            <p class="page_description">Let's get in touch and talk about what we could do together.</p>
            <button class="page_button">
                See Contact.
            </button>
        </div>
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {

    .home {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .page_title {
        font-size: 1rem;
        color: black;
    }
    .page_description {
        color: #a4a4a4;
        margin-top: 6px;
        font-size: 0.8rem;
    } 
    .page_button {
        margin-top: 6px;
    }
    
}

@media only screen and (min-width: 600px) {

}
</style>
