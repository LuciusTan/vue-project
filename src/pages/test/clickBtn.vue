<template>
    <div>
        <button :class="{'btn':isActive, 'btnClick': isError}" @click = 'changeCol()'>点我变色</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:true,
            isError: false
        }
    },
    methods:{
        changeCol(){
            this.isActive = !this.isActive;
            this.isError = !this.isError
        }
    }
}
</script>
<style scoped>
.btn {background-color:purple;border: none;font-size:20px;color:#fff}
.btnClick {background-color:pink;border:2px slid yellow;font-size:30px;color:#000}
</style>