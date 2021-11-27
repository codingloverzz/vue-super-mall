<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <tab-bar></tab-bar>
  </div>
  <router-view />
</template>
<script>
import TabBar from "./components/MyTabBar.vue";
export default {
  components: {
    TabBar,
  },
};
</script>
<style lang="less">
</style>
