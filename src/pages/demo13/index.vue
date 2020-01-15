<template>
  <div>
    <div>vue-router路由</div>
    <div>------------------------------------</div>
    <!-- https://router.vuejs.org/zh-cn/ -->
    <router-link to="/demo9">demo9</router-link>
    <div>------------------------------------</div>
    <router-link :to="{name:'demo1', params:{userId: 123}}">demo1</router-link>
    <!-- localhost:8080/#/demo1/123 -->
    <div>------------------------------------</div>
    <router-link :to="{name:'demo1', params:{userId: 123}, query:{plan: 'private'}}">query</router-link>
    <!-- localhost:8080/#/demo1/123?plan=private -->
    <div>------------------------------------</div>
    <button @click="toUrl">跳转页面demo2</button>
    <button @click="toUrl2">跳转页面demo3</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
      toUrl(){
          this.$router.push({path:'/demo2'})
      },
      toUrl2(){
        //   this.$router.push({name:'demo3',params:{userId:123}});
          this.$router.push({name:'demo3',params:{userId:123},query:{plan:'private'}});
      }
  }
};
</script>
