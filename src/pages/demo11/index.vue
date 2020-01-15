<template>
  <div>
    <div>Vue中DOM操作</div>
    <div>------------------------------------</div>
    <div ref="head" class="head" id="head"></div>
    <div ref="arr"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 4, 6, 7, -9, 4, 0, -2, -1, 8]
    };
  },
  mounted() {
    //再mounted内进行DOM操作  如引入JQ后 $(".head").html("123");
    //原生js document.getElementById("head")
    //vue
    this.$refs.head.innerHTML = "hello Vue";
    function compare(value2, value1) {
      if (value1 < value2) {
        return 1;
      } else if (value1 > value2) {
        return -1;
      } else {
        return 0;
      }
    }
    var str = this.arr.sort(compare);
    this.$refs.arr.innerHTML = str;
  }
};
</script>