<template>
  <div>
    <div>状态管理vuex</div>
    <div>------------------------------------</div>
    <!-- http://vuex.vuejs.org/zh-cn/ -->
    <div>{{ msg }}</div>
    <button @click="change">点击</button>
    <div>{{ msg2 }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        msg:'123',
        msg2:'456'
    };
  },
  methods:{
      change(){
          //vuex 取数据
          this.msg = this.$store.state.count;
          //vuex 修改公共数据
          this.$store.dispatch('inc',100000);
          this.msg2 = this.$store.state.num;
      }
  }
};
</script>
