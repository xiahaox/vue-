<template>
  <div>
    <vue-seamless-scroll
      :data="listData"
      :class-option="classOption"
      class="warp"
    >
      <ul class="item">
        <li v-for="(item, index) in listData" :key="index">
          <span class="title" v-text="item.title"></span>
          <span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
// 循环滚动插件
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "scroll",
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16",
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16",
        },
      ],
      number: 0,
    };
  },
  computed: {
    classOption: function () {
      return {
        step: 0.5,
        limitMoveNum: 5,
      };
    },
  },
};
</script>

<style scoped>
.warp {
  height: 260px;
  width: 360px;
  overflow: hidden;
}

.warp ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

.warp li {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
</style>