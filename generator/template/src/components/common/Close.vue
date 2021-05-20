<template>
  <div class="close">
    <div class="po_con">
      <div class="ro_con">+</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { images } from "@/util/global";

export default defineComponent({
  setup() {},
});
</script>
<style lang="less" scoped>
.close {
  font-size: 65px;
  width: 52px;
  height: 52px;
  border: 1px solid #34fefe;
  color: #34fefe;
  border-radius: 100%;
  position: relative;
  .flex_center_center;
  .po_con {
    left: 12px;
    position: absolute;
    top: -7px;
  }
  .ro_con {
    font-weight: 100;
    width: 45px;
    height: 45px;
    transform: rotate(45deg);
  }
}
</style>
