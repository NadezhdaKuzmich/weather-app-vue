<template>
  <Header />
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  components: { Header },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

body {
  font-family: "Montserrat", sans-serif;
}

main {
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgb(0 0 0 / 58%)
  );
  padding: 25px 0;
}

.container {
  max-width: 1000px;
  padding: 0 20px;
  margin: auto;
}

@media (min-width: 1200px) {
  body {
    overflow-y: hidden;
  }
}
</style>