<template>
  <header>
    <div class="header-container">
      <div class="container">
        <div class="logo">
          <router-link to="/">Weather App</router-link>
        </div>
        <nav>
          <ul class="nav-content">
            <li>
              <router-link to="/">Main</router-link>
            </li>
            <li>
              <router-link :to="'/about'">About</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.logo a {
  font-weight: 600;
}

a {
  color: #dce6f6cf;
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: #344d89;
}

.header-container {
  font-size: 18px;
  background: #202535;
  padding: 22px 0;
}

.header-container .container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}

.nav-content {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 20px;
}
</style>