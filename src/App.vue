<script setup lang="ts">

  import Navigation from "./components/Navigation.vue"


</script>

<template>
  <div class="app">
    <header>
      <p>
        Araam Zaremehrjardi
      </p>
    </header>
    <Navigation class="navigation" />
    <section>
      <RouterView />
    </section>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 30px;
    margin: 30px;
  }
  header {
  }
  header > p {
    letter-spacing: 2px;
    text-align: center;
  }
  .navigation {
  }
  section {

  }
}

@media only screen and (min-width: 600px) {

}


</style>
