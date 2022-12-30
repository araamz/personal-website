<script setup lang="ts">

  import Navigation from "./components/Navigation.vue"


</script>

<template>
    <div class="app">
      <header>
        <p class="logo">
          Araam Zaremehrjardi
        </p>
      </header>
      <Navigation class="navigation"/>
      <RouterView class="content" v-slot="{ Component, route }">
        <Transition name="slide-fade">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
  </div>

</template>

<style scoped>

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

@media only screen and (min-width: 300px) {

  .app {
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }
  .logo {
    font-size: 1rem;
    letter-spacing: 2px;
    text-align: center;
  }
  .content {
    background: white;
    box-shadow: 0 5px 8px 1px lightgray;
    border-radius: 4px;
  }
}

@media only screen and (min-width: 600px) {

  .app {
    height: 90vh;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: min-content 1fr;
    box-sizing: border-box;
  }
  header {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .logo {
    text-align: left;
  }
  .navigation {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .content {
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: 1;
    grid-row-end: span 3;
    overflow-y: auto;
  }
  
}

@media only screen and (min-width: 900px) {
  .app {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    column-gap: 100px;
  }
  
}


</style>
