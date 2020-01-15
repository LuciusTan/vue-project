<template>
<div>
    <div class="test">Hello Vue</div>
    <count-down col='blue'></count-down>
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
    } 
}
</script>