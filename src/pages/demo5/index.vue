<template>
  <div>
    <div>条件渲染</div>
    <div>----------------v-if------------------</div>
    <h1 v-if="ok">Yes</h1>
    <div>------------ -v-else-if------------------</div>
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>
    <div>------------ -v-show------------------</div>
    <div v-show="isShow">show</div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            ok:true,
            type:'B',
            isShow:true
        }
    },

}
</script>