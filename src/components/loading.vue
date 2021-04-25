<template>
  <div class="loading-box" v-show="show">
    <!-- <div class="loading-content"> -->
    <!-- <div class="animate"></div> -->
    <!-- <div class="text"></div> -->
    <h1>{{text}}</h1>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: "正在加载中...",
    },
  },
};
</script>
<style>
.loading-box {
  background: blueviolet;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0.6;
}
h1 {
  border: 1px solid black;
}
</style>