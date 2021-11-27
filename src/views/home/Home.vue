<template>
  <div class="home">
    <nav-bar class="nav" title="蘑菇街" :isShowArrow="false"></nav-bar>
    <swiper :bannerData="banner"></swiper>
    <recommend :recommendData="recommend"></recommend>
    <fashion></fashion>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="handleTabClick"
    ></tab-control>
    <grid :columnNum="2" :goodsList="goods[currentType].list"></grid>
    <my-back-top></my-back-top>
  </div>
</template>

<script>
import NavBar from "../../components/MyNavBar.vue";
import Swiper from "../../components/Swiper.vue";
import Recommend from "./children/Recommend.vue";
import Fashion from "./children/Fashion.vue";
import TabControl from "../../components/TabControl.vue";
import Grid from "../../components/MyGrid.vue";
import MyBackTop from "../../components/MyBackTop.vue";
import { useHomeData } from "../../hooks/useHomeData";
import { useHomeGoodsList } from "../../hooks/useHomeGoodsList";
export default {
  components: {
    NavBar,
    Swiper,
    Recommend,
    Fashion,
    TabControl,
    Grid,
    MyBackTop,
  },
  setup() {
    const [banner, recommend] = useHomeData();
    const [goods, currentType, handleTabClick] = useHomeGoodsList();
    return {
      banner,
      recommend,
      goods,

      currentType,

      handleTabClick,
    };
  },
};
</script>

<style scoped>
.home {
  padding-top: 45px;
  padding-bottom: 48px;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>