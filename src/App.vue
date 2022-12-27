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
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 30px;
  }
  header {
    margin-top: 30px;
  }
  header > p {
    letter-spacing: 2px;
    text-align: center;
  }
  .navigation {
    width: min-content;
  }
  section {
    margin: 0 30px;

  }
}

@media only screen and (min-width: 600px) {

}


</style>
