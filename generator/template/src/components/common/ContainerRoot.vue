<template>
  <div
    :style="{ backgroundImage: $uw(images.main_bg) }"
    :class="$createClass('tmpc_root')"
  >
    <img
      :src="$deviceIsMobile() ? images.banner_mo : images.banner"
      class="banner"
    />
    <div class="main_con">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Images = {
  banner: string;
  banner_mo: string;
  main_bg: string;
};

export default defineComponent({
  props: {
    images: {
      type: Object as PropType<Images>,
      default: () => ({}),
    },
    banner: { type: String, default: () => "" },
  },
  setup() {},
});
</script>

<style lang="less" scoped>
.tmpc_root {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  .banner {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .main_con {
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
}
.tmpc_root_pc {
  .main_con {
    width: 1200px;
  }
}
.tmpc_root_mo {
  .banner {
    width: 100vw;
  }
}
</style>
