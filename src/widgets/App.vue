<template>
  <div id="app">
    <o-nav></o-nav>
    <div class="router-wrap">
      <router-view class="p-router-view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'o-nav': require('./material/nav/o-nav.vue').default
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Montserrat, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
<style lang="less">
@import url("../assets/css/style.less");
@import url("../assets/css/components.less");
</style>
