<template>
    <div>
        <div>选项数据</div>
        <div>-----------------------------------</div>
        <div>{{msg}}</div>
        <div>-----------------------------------</div>
        <div>computed:{{aDouble}}</div>
        <div>-----------------------------------</div>
        <div @click="say('hi')">点击我</div>
        <div>-----------------------------------</div>
        <div>{{shi1}}</div>
        <div>{{shi2}}</div>
        <div>{{shi3}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg: 'Hello Vue',
            num: 1,
            shi1: '《诗经国风 .周南》',
            shi2: '关关雎鸠，在河之洲。',
            shi3: '窈窕淑女，君子好逑。'
        }
    },
    computed: {
        aDouble(){
            return this.num *2
        }
    },
    methods: {
        say(e){
            alert(e)
        }
    },
}
</script>