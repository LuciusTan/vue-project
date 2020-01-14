<template>
    <div class="test">Hello Vue</div>
</template>
<script>
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
        console.log("mounted")
    }, 
}
</script>