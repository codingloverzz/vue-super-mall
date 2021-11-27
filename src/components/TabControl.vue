<template>
  <div>
    <van-tabs @click-tab="onClickTab">
      <van-tab :title="item" v-for="item in titles" :key="item"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  emits: ["tabClick"],
  setup(props, { emit }) {
    const onClickTab = (e) => {
      emit("tabClick", e.name);
    };
    return {
      onClickTab,
    };
  },
};
</script>

<style scoped>
:deep(.van-tab--active) {
  color: #ff8080;
}
</style>