<template>
  <div>
    <div>事件处理器</div>
    <div>------------------------------------</div>
    <div id="example-1">
        <button v-on:click="counter1 += 1">增加1</button>
        <p>这个按钮被点击了{{ counter1 }}次</p>
    </div>
    <div>------------------------------------</div>
    <div id="example-2">
        <button @click="greet()">Greet方法来加1</button>
        <p>这个按钮被点击了{{ counter2 }}次</p>
    </div>
    <div>------------------------------------</div>
    <div id="example-3">
        <button @click="say('Hi')">say Hi</button>
    </div>
    <div>------------------------------------</div>
    <div id="example-4" @click="dothis2">
        <button @click.stop = "dothis">dothis</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter1:0,
      counter2:0
    };
  },
  methods:{
      greet(){
          this.counter2 +=1;
      },
      say(e){
          alert(e)
      },
      dothis(){
          alert("dothis")
      },
      dothis2(){
          alert("dothis2")
      }
  }
};
</script>