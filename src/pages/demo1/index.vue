<template>
<div>
    <div class="test">Hello Vue</div>
    <count-down col='blue' @end='ending'></count-down>
</div>
</template>
<script>
import countdown from '@/components/countdown.vue';
export default {
    data(){
        return{

        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    }, 
    created(){
        console.log("beforeCreate")
    }, 
    beforeMount(){
        console.log("beforeMount")
    }, 
    mounted(){
        console.log("mounted"),
        alert(this.$route.params.userId)
        alert(this.$route.query.plan)
    },
    components:{
        "count-down": countdown
    },
    methods:{
      ending(){
          alert("已经结束了")
      }
  } 
}
</script>