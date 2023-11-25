<template>
  <Weather />
</template>

<script>
import Weather from "@/components/Weather.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Weather },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>