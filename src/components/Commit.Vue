<script lang="ts">
import { type } from 'os'


    export default {
        props: {
            timestamp: String,
            message: String
        },
        computed: {
            formatted_date() {
                let parsed_timestamp: Date = new Date(this.timestamp)

                let month = this.get_month(parsed_timestamp.getMonth())
                let date = parsed_timestamp.getDate()
                let year = parsed_timestamp.getFullYear()

                return `${month} ${date}, ${year}`
            }
        },
        methods: {
            get_month(month: Number) {
                switch (month) {
                    case 0:
                        return "January"
                    case 1: 
                        return "February"
                    case 2:
                        return "March"
                    case 3: 
                        return "April"
                    case 4:
                        return "May"
                    case 5:
                        return "June"
                    case 6:
                        return "July"
                    case 7:
                        return "August"
                    case 8:
                        return "September"
                    case 9: 
                        return "October"
                    case 10: 
                        return "November"
                    case 11:
                        return "December"
                }
            }
        }
    }

</script>

<template>

    <div class="commit">
        <p class="date">
            {{ formatted_date }}
        </p>
        <p class="message">
            {{ message }}
        </p>
    </div>

</template>

<style scoped>

@media only screen and (min-width: 300px) {
    .commit {
        border: 1px solid black;
        border-radius: 4px;
        padding: 6px;
    }
    .commit > p {
        font-size: 0.4rem;
        line-height: 0.7rem;
    }
    .date {
        font-weight: 700;
    }
    .message {
        text-align: left;
    }
}

</style>