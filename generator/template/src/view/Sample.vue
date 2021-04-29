<template>
  <div :class="className">sample not simple</div>
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

<style lang='less' src="./Sample.less" scoped />