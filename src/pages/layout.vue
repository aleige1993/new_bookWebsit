<template>
  <div>
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
  import Headers from '../components/headers/index'
  import Footers from '../components/footers/index'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
      Headers,
      Footers
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>