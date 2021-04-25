<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/scroll">scroll</router-link>|
      <router-link to="/mMap">百度地图</router-link>
      <!-- <div>2s44332sss22{{computedVal}}</div> -->
    </div>
    <router-view />
    <!-- <button @click="changeHandle()">点击</button>
    <div v-for="(item, index) in arr" :key="index">{{ item }}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  methods: {
    changeHandle() {
      // this.arr.push(6);
      this.arr[2] = 0;
    },
  },
  beforeCreate() {
    // alert(555);
  },
  watch: {
    arr: {
      handler: function (val, oldVal) {
        console.log(val, oldVal);
      },
    },
  },
  computed: {
    computedVal: function () {
      console.log(this.arr);
      return this.arr;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
