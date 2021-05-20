<template>
  <section :class="$createClass('raw')">
    <h1 v-for="line in lines" :key="line">{{ line }}</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {
      lines: [
        `在法律许可范围内，
          公司有随时调整活动的权利并享有活动的最终解释权，
          请详细了解规则后再参与`,
        `如有疑问请联系在线客服或客服QQ：800184580进行咨询。`,
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.raw {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin-bottom: 20px;
  color: #e4d7ff;
}
.raw_mo {
  line-height: 5.333vw;
  font-size: 2.133vw;
  margin-bottom: 2.667vw;
}
</style>
