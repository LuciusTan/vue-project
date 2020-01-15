<template>
  <div>
    <div>模板语法</div>
    <div>------------------------</div>
    <div>data:{{msg}}</div>
    <div>------------------------</div>
    <div>{{ number + 1 }}</div>
    <div>------------------------</div>
    <div v-html="rawHtml"></div>
    <div>------------------------</div>
    <div v-bind:class="red">我的class是动态的</div>
    <div>------------------------</div>
    <div v-on:click="say('Hi')">点击我</div>
    <div>------------------------</div>
    <div @click="say('Hi')">点击我(简写)v-on:简写成@</div>   
    <div>------------------------</div>
    <div>{{message | capitalize }}</div>
    <div>-----------------------------------------------------------</div>
    <div>-----------------------------------------------------------</div>
    <div>-----------------------------------------------------------</div>

    <div>计算属性</div>
    <div>------------------------</div>
    <div>{{newMsg}}</div>
    <div>在模板内直接嵌入js：{{newMsg.split('').reverse().join('')}}</div>
    <div>使用计算属性：{{reverseMsg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello Vue",
      number: 1,
      rawHtml: "<span>123</span>",
      red: "red active",
      message: 'helloworld',
      newMsg: "HELLO KITTY"
    };
  },
  methods: {
    say(e) {
      alert(e);
    }
  },
  filters: {
      capitalize(){
          return '123'
      }
  },
  computed:{
      reverseMsg(){
          return this.newMsg.split('').reverse().join('');
      }
  },
  mounted(){
    alert(this.$route.params.userId);
    alert(this.$route.query.plan)
  }
};
</script>