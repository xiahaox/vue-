<template>
  <div class="hello">
    <h1>{{ vaa }}</h1>
    <div>
      <p>我是儿子，父亲对我说： {{value}}</p>
      <!-- <simple :value="b" @v_click="handleclick"></simple>
      <simple :value="c"></simple>-->
    </div>
    <button v-on:click="handleclick">子组件button{{b}}</button>
  </div>
</template>

<script>
// import simple from "./simple";
export default {
  name: "HelloWorld",
  data() {
    return {
      b: 88,
      c: 9,
      // bb: this.msg,
    };
  },
  components: {
    // simple,
  },
  props: {
    msg: Object,
    value: {
      type: String,
    },
  },
  methods: {
    handleclick() {
      this.$emit("input", "还你200块");
      this.c = 66;
      sessionStorage.setItem("vueS", new Date().getSeconds());
      // this.b++;
      // this.vaa = 999;
      // this.$loading.show();
    },
  },
  mounted() {
    console.log(this);
  },
  computed: {
    vaa: function () {
      return this.msg.a;
    },
  },
  beforeUpdate() {
    console.log("helloworld--updated");
  },
  updated() {
    console.log("helloworld---updated");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
