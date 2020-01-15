<template>
  <div>
    <div>自定义组件</div>
    <div>------------------------------------</div>
    <count-down col='red' @end="ending"></count-down>
    <count-down></count-down>
  </div>
</template>
<script>
import countdown from "@/components/countdown.vue";
export default {
  data() {
    return {};
  },
  components: {
    'count-down': countdown
  },
  methods:{
      ending(){
          alert("已经结束了")
      }
  }
};
</script>