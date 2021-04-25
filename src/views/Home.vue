<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>我是父亲, 对儿子说： {{modelVal}}</p>
    <HelloWorld :msg="obj" ref="node" v-model="modelVal" />
    <div ref="node">{{num}}</div>
    <button @click="handleclick">UUU</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      num: "555",
      modelVal: "999",
      obj: {
        a: 666,
      },
    };
  },
  components: {
    HelloWorld,
  },
  beforeUpdate() {
    console.log(this.$refs.node.innerText, "beforeUpdate");
  },
  updated() {
    console.log(this.$refs.node.innerText, "updated");
  },
  methods: {
    handleclick() {
      this.num = "999";
      setTimeout(() => {
        this.num = "999";
        console.log(this.$refs.node.innerText, "settimeout");
      }, 1000);
      new Promise((resolve) => {
        resolve();
      }).then(() => {
        console.log(this.$refs.node.innerText, "promise");
      });
      this.$nextTick(function () {
        console.log(this.$refs.node.innerText, "nextTick");
      });
      console.log(this.$refs.node.innerText);
      // this.$forceUpdate();
    },
  },
};
</script>
