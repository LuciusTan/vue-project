<template>
  <div>
    <div>class与style绑定</div>
    <div>------------------------------------</div>
    <div class="static"
        v-bind:class ="{ 'active': isActive, 'text-danger':hasError }">
        class 第一种绑定
    </div>
    <div class="static"
        v-bind:class ="classObject">
        class 第二种绑定
    </div>
    <div class="static"
        v-bind:class ="[activeClass, errorClass]">
        class 第三种绑定
    </div>
    <div>------------------------------------</div>
    <div v-bind:style ="{'color':activeColor,'fontSize':fontsize+'px'}">
        style 第一种绑定
    </div>
    <div v-bind:style ="styleObject">
        style 第二种绑定
    </div>
    <div v-bind:style ="[bassStyles, overridingStyles]">
        style 第三种绑定
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isActive: true,
            hasError: false,
            classObject:{
                'active': true,
                'text-danger': true
            },
            activeClass:'active',
            errorClass:'text-danger',
            activeColor: 'red',
            fontsize:26,
            styleObject:{
                'color':'red',
                'fontSize': '40px'
            },

            bassStyles:{
                'color':'blue'
            },
            overridingStyles:{
                'fontSize':'30px'
            },

        }
    },

}
</script>