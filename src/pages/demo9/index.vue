<template>
  <div>
    <div>表单控件绑定</div>
    <div>------------------------------------</div>
    <input v-model = 'message'>
    <p>Message is: {{message}}</p>
    <div>------------勾选框------------------</div>
    <input type="checkbox" value="Jack" v-model = 'checkNames'>
    <input type="checkbox" value="Bob" v-model = 'checkNames'>
    <input type="checkbox" value="John" v-model = 'checkNames'>
    <br>
    <span>checkd names: {{ checkNames }}</span>
    <div>------------选择列表------------------</div>
    <div id="example-5">
        <select v-model="selected">
            <option value="请选择" disabled>请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
        </select>
        <span>selected: {{ selected }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        message:'hello Vue',
        checkNames:[],
        selected:''
    };
  },
};
</script>