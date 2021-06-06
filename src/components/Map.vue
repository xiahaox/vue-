<template>
  <div>
    <div id="l-map"></div>
  </div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {
      map: "",
    };
  },
  props: {
    lng: {
      type: Number,
    },
    lat: {
      type: Number,
    },
  },
  methods: {
    init() {
      var BMapGL = window.BMapGL;
      let map = new BMapGL.Map("l-map");

      let latling = new BMapGL.Point(this.lng, this.lat);
      console.log(22222222);
      map.centerAndZoom(latling, 14);
      map.enableScrollWheelZoom(true);
      this.map = map;
      this.createLister();
      this.createGeocoder();
    },

    changeCenter() {
      var BMapGL = window.BMapGL;
      let latling = new BMapGL.Point(this.lng, this.lat);
      this.map.setCenter(latling);
      this.createGeocoder();
    },
    createGeocoder() {
      //根据经纬度转化位置
      var BMapGL = window.BMapGL;
      var geo = new BMapGL.Geocoder();
      let latling = new BMapGL.Point(this.lng, this.lat);
      geo.getLocation(latling, (result) => {
        console.log(result);
      });
    },
    createLister() {
      this.map.addEventListener("click", (e) => {
        this.$emit("bindClick", e);
      });
    },
  },

  watch: {
    // lng: function (newVal, oldVal) {
    //   console.log(this.ddd);
    //   console.log(newVal, oldVal);
    //   if (newVal) {
    //     this.init();
    //   }
    // },
    ddd: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!oldVal && newVal) {
        this.init();
      } else if (oldVal && newVal) {
        this.changeCenter();
      }
    },
  },
  computed: {
    ddd() {
      //   return { lng: this.lng, lat: this.lat };
      return !this.lng || !this.lat ? null : { lng: this.lng, lat: this.lat };
    },
  },
};
</script>
<style lang="scss" scoped>
#l-map {
  height: 500px;
  width: 100%;
}
</style>