<template>
  <div class="footsbox">
    <div class="main">
      <p style="margin-bottom:40px">版权所有：中国教学仪器设备有限公司</p>
      <p>京ICP备09058289号 京公网安备110282018</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style scoped>
.footsbox {
  background-color: #444e62;
  width: 100%;
  height: 213px;
}
.footsbox .main {
  box-sizing: border-box;
  padding: 75px 0;
}
.footsbox .main p {
  font-size: 14px;
  font-family: HelveticaNeue;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.65);
  opacity: 1;
  text-align: center;
}
</style>