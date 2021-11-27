<template>
  <div class="grid">
    <van-grid :column-num="columnNum">
      <van-grid-item v-for="item in goodsList" :key="item">
        <van-image :src="item.show.img"></van-image>
        <div class="detail">
          <div class="goods-name">{{ item.title }}</div>
          <div class="number">
            <span class="price">{{ item.price }}¥</span>
            <span class="cfav">
              <van-icon name="like" />
              {{ item.cfav }}</span
            >
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem, Image as VanImage, Icon as VanIcon } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    VanImage,
    VanIcon,
  },
  props: {
    columnNum: {
      type: Number,
      default: 2,
    },
    goodsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.grid img {
  width: 130px;
  height: 150px;
}
.detail {
  font-size: 14px;
  padding: 5px 5px 0 5px;
  .goods-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    .price {
      margin-right: 10px;
      color: #ff8080;
    }
    .cfav {
      color: pink;
    }
  }
}
</style>