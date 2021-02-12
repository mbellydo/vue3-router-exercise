<template>
  <the-navigation></the-navigation>
  <main>
    <!-- TODO add a default router-view -->
    <router-view></router-view>
  </main>
  <footer>
    <!-- TODO add a named footer router-view -->
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      todos: [
        { id: "t1", name: "Todo 1" },
        { id: "t2", name: "Todo 2" },
        { id: "t3", name: "Todo 3" },
      ],
    };
  },
  provide() {
    return {
      todos: this.todos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>