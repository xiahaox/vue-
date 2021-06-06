<template>
  <div>
    <div>
      <input
        type="text"
        @input="changeInput"
        v-model="value"
        placeholder="搜索"
      />
      <button @click="addfn">变动</button>
    </div>
    <Map :lng="lng" :lat="lat" ref="map" @bindClick="bindClick"></Map>
    <div id="log"></div>
  </div>
</template>
<script>
import Map from "@/components/Map";
export default {
  name: "mMap",
  components: {
    Map,
  },
  data() {
    return {
      lng: null,
      lat: null,
      value: "",
      localSearch: "",
      marker: "",
    };
  },
  methods: {
    addfn: function () {
      this.lng += 0.001;
      this.lat += 0.001;
    },
    bindClick: function (event) {
      this.lng = event.latlng.lng;
      this.lat = event.latlng.lat;
      var BMapGL = window.BMapGL;
      this.marker.setPosition(new BMapGL.Point(this.lng, this.lat));
    },
    changeInput: function () {
      this.localSearch.search(this.value);
    },
    getMap: function () {
      return this.$refs.map.map;
    },
    CreateLabel: function () {
      var BMapGL = window.BMapGL;
      var label = new BMapGL.Label("欢迎使用百度地图JSAPI GL版本", {
        position: new BMapGL.Point(116.404, 39.91), // 指定文本标 注所在的地理位置
        offset: new BMapGL.Size(30, -30), // 设置文本偏移量
      });
      label.setStyle({
        color: "blue",
        borderRadius: "5px",
        borderColor: "#ccc",
        padding: "10px",
        fontSize: "16px",
        height: "30px",
        lineHeight: "30px",
        fontFamily: "微软雅黑",
      });
      this.getMap().addOverlay(label);
    },
    Createcircle: function () {
      var BMapGL = window.BMapGL;
      let latling = new BMapGL.Point(this.lng, this.lat);
      var circle = new BMapGL.Circle(latling, 1000, {
        fillColor: "blue",
        strokeWeight: 1,
        fillOpacity: 0.3,
        strokeOpacity: 1,
      });
      console.log(circle);
      this.getMap().addOverlay(circle);
    },
    CreateMarker: function () {
      var BMapGL = window.BMapGL;
      let latling = new BMapGL.Point(this.lng, this.lat);
      var marker = new BMapGL.Marker(latling, {
        Animation: "BMAP_ANIMATION_BOUNCE",
      });
      this.marker = marker;
      // 将标注添加到地图
      this.getMap().addOverlay(marker);
    },
    CreateSearch: function () {
      var BMapGL = window.BMapGL;
      var options = {
        onSearchComplete: function (results) {
          if (!results) return;
          //   //查询结果状态码
          console.log(results.getCurrentNumPois());
          var s = [];
          console.log(results);

          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
          }
          document.getElementById("log").innerHTML = s.join("<br>");
        },
        pageCapacity: 10,
        pageIndex: 0,
      };
      this.localSearch = new BMapGL.LocalSearch(this.getMap(), options);
    },
  },
  beforeMount() {
    setTimeout(() => {
      //   this.lng = 121.465721;
      //   this.lat = 29.943587;

      this.lng = 121.465731;
      this.lat = 29.94356;

      //   this.lng = 121.472104;
      //   this.lat = 29.9497181;
      var BMapGL = window.BMapGL;
      new BMapGL.Convertor().translate(
        [new BMapGL.Point(this.lng, this.lat)],
        3,
        5,
        (port) => {
          console.log(port);
          console.log(111);
          this.lng = port.points[0].lng;
          this.lat = port.points[0].lat;
          setTimeout(() => {
            this.CreateLabel();
            this.Createcircle();
            this.CreateMarker();
            this.CreateSearch();
            // console.log(this.$refs.map);
          }, 0);
        }
      );
    }, 0);
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>