<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-text="data1.data22"></div>
    <input type="text" v-model="data1.data22" />
    <div>{{computedVal}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: {
        data22: 3333,
      },
      data2: [1, 2, 3],
    };
  },
  watch: {
    data2: {
      handler: function (val, oldVal) {
        console.log(val, oldVal);
      },
      // deep: true,
    },
    // "data1.data22": function(val, oldVal) {
    //   console.log(val, oldVal);
    // }
  },
  computed: {
    computedVal: function () {
      console.log(this);
      return this.data1;
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>
