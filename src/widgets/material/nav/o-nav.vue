<template>
  <nav class="">
    <ul>
      <li v-for="item in routes">
        <router-link :to="item.to">{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ['routes'],
  // created(){},
  // mounted(){},
  // updated(){},
  // activated(){}
  computed: {},
  watch: {},
  methods: {},
  data () {
    return {

    }
  }
}
</script>
<style></style>
<style lang="less" scoped>
</style>
