<template>
  <div class="tabbar">
    <van-tabbar route active-color="#FF1493" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="goods-collect"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/cart" icon="shopping-cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/profile" icon="friends"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="less">
.van-tabbar-item {
  font-size: 16px !important;
  font-weight: 500;
}
.van-tabbar {
  background-color: #f8f8ff;
}
.tabbar-item-active-color {
  background-color: #f8f8ff !important;
}

.van-tabbar {
  height: 48px;
}
</style>