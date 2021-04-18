<template>
  <div :class="className"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { generateClassWithDevice } from "@/util/device";

export default defineComponent({
  setup() {
    const className = generateClassWithDevice("home");
    return { className };
  },
});
</script>

<style scoped>
.home {
  width: 100px;
  height: 100px;
  background: #eee;
}
</style>

<style scoped>
.home_m {
  width: 20vh;
  height: 20vh;
  background: red;
}
</style>
