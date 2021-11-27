<template>
  <div class="back-top">
    <van-icon name="back-top" />
  </div>
</template>

<script>
import { Icon as VanIcon } from "vant";
export default {
  components: {
    VanIcon,
  },
};
</script>

<style scoped>
.back-top {
  z-index: 9;
  position: fixed;
  bottom: 70px;
  right: 20px;
  height: 40px;
  width: 40px;
  font-size: 40px;
  border-radius: 20px;
  color: red;
  background-color: white;
}
</style>