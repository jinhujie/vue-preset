<template>
  <div :class="$createClass('toplevel_tabs')">
    <a v-for="tabInfo in tabsInfo" :key="tabInfo.key" class="a_con">
      <img
        :src="
          activeTabKey === tabInfo.key
            ? tabInfo.backgroundActive
            : tabInfo.background
        "
        @click="onTabClick(tabInfo.key)"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface t_Tab {
  key: string;
  background: string;
  backgroundActive: string;
}

export default defineComponent({
  props: {
    tabsInfo: { type: Array as PropType<t_Tab[]>, default: () => [] },
    onTabClick: Function,
    activeTabKey: { type: Number, default: () => 0 },
  },
});
</script>

<style lang="less" scoped>
.toplevel_tabs {
  text-align: center;
  .a_con {
    display: inline-block;
  }
}
.toplevel_tabs_pc {
  margin-bottom: 20px;
  img {
    margin: 0 25px;
  }
}
.toplevel_tabs_mo {
  margin-left: -2.6666vw;
  width: 100vw;
  .flex_center_center;
  flex-wrap: wrap;
  margin-bottom: 6.6667vw;
  img {
    width: 29.8667vw;
    height: 10.6667vw;
    margin: 0 1vw;
  }
}
</style>
