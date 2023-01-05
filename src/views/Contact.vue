<script lang="ts">

    import contacts_json from '../assets/information/contacts.json'     

    import Contact from '../components/Contact.vue'

    export default {
        components: {
            Contact
        },
        data() {
            return {
                contacts: contacts_json
            }
        }
    }
</script>
    
<template>
    <div class="contacts">
        <Contact 
            v-for="contact in contacts.contacts"
            :type="contact.type"
            :label="contact.label"
            :description="contact.description"
            :link="contact.link"
            :handle="contact.handle"
        />
    </div>
</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .contacts {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}

@media only screen and (min-width: 600px) {

}
</style>
