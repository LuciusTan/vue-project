<template>
  <div>
      <div v-html="addBtn" v-bind:class = 'addClass' v-on:click = "say('我出来了')"></div>
  </div>
</template>
<script>
export default {
    data(){
        return {
           addBtn:"<button>点我</button>",
           addClass:"btn"
        }
    },
    methods:{
        say(e){
            alert(e)
        }
    }

}
</script>