<template>
  <div class="simple">
    <h3 @click="()=>this.$emit('v_click')">simple</h3>
    <h5>{{value}}</h5>
  </div>
</template>
<script>
export default {
  name: "simple",
  data() {
    return {
      staticVal: 9,
    };
  },
  props: {
    value: Number,
  },
  mounted() {
    console.log(this.value);
  },
};
</script>
<style lang="scss" scoped>
.simple {
  border: 1px black solid;
}
</style>