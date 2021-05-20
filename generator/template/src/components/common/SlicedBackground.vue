<template>
  <div :class="$createClass('border_able_bg')">
    <img :src="top" class="border_1" />
    <div class="full_fill" :style="{ backgroundImage: urlWrapper(middle) }" />
    <img :src="bottom" class="border_2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { urlWrapper } from "@/util/vue";

/**
 * depence: container should has css `position: relative`
 */
export default defineComponent({
  props: ["top", "middle", "bottom"],
  setup() {
    return {
      urlWrapper,
    };
  },
});
</script>

<style lang="less" scoped>
.border_able_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  .full_fill {
    flex-grow: 1;
    width: 100%;
    height: 100%;
    background-size: 100%;
  }
}
</style>
