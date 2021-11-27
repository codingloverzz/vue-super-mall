<template>
  <div class="swiper">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      lazy-render
    >
      <van-swipe-item v-for="item in bannerData" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    bannerData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  height: 170px;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>