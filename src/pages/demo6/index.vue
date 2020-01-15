<template>
  <div>
    <div>列表渲染</div>
    <div>--------------v-for = 'items in items' 数组-----------------</div>
    <ul id="example-1">
        <li v-for="item in items" :key="item.id">
            {{ item.message }}
        </li>
    </ul>
    <div>------------v-for = "(item,index) in items" 数组---------------</div>
    <ul id="example-2">
        <li v-for="(item, index) in items" :key="item.id" >
           {{ index }} - {{ item.message }}
        </li>
    </ul>
    <div>----------v-for = "(value, key) in object" 对象------------</div>
    <ul id="example-3">
        <li v-for="(value, key) in obj">
           {{ key }} : {{ value }}
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
        return {
           items:[
               {message: 'Foo'},
               {message:'Bar'}
           ],
           obj:{
               firstName: 'XIAOMING',
               age: 14
           }
        }
    },

}
</script>