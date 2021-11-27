<template>
  <div class="nav-bar">
    <van-nav-bar :title="title" :left-arrow="isShowArrow">
      <template #right> </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar, Button } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isShowArrow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #ff8080;
  color: #fff;
  height: 45px;
}
:deep(.van-nav-bar__content) {
  height: 100%;
}
:deep(.van-nav-bar__title) {
  font-size: 20px;
  color: #fff;
}
</style>