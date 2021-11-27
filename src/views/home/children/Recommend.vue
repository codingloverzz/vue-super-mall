<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommendData" :key="item">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
  <div class="line"></div>
</template>

<script>
export default {
  props: {
    recommendData: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px 0;
}
.recommend img {
  height: 50px;
  width: 50px;
}
.recommend-item {
  text-align: center;
  color: pink;
}
.line {
  height: 10px;
  width: 100%;
  background-color: #f0f0f0;
}
</style>