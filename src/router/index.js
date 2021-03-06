import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/pages/demo1/index.vue'
import demo2 from '@/pages/demo2/index.vue'
import demo3 from '@/pages/demo3/index.vue'
import demo4 from '@/pages/demo4/index.vue'
import demo5 from '@/pages/demo5/index.vue'
import demo6 from '@/pages/demo6/index.vue'
import demo7 from '@/pages/demo7/index.vue'
import demo8 from '@/pages/demo8/index.vue'
import demo9 from '@/pages/demo9/index.vue'
import demo10 from '@/pages/demo10/index.vue'
import demo11 from '@/pages/demo11/index.vue'
import demo12 from '@/pages/demo12/index.vue'
import demo13 from '@/pages/demo13/index.vue'
import demo14 from '@/pages/demo14/index.vue'
import demo15 from '@/pages/demo15/index.vue'
import demo16 from '@/pages/demo16/index.vue'
import demo17 from '@/pages/demo17/index.vue'
import home from '@/pages/test/index.vue'
import detail from '@/pages/test/detail.vue'
import clickbtn from '@/pages/test/clickBtn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1/:userId',
      name: 'demo1',
      component: Hello
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3/:userId',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: demo8
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: demo9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: demo11
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: demo12
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: demo13
    },
    {
      path: '/demo14',
      name: 'demo14',
      component: demo14
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: demo15
    },
    {
      path: '/demo16',
      name: 'demo16',
      component: demo16
    },
    {
      path: '/demo17',
      name: 'demo17',
      component: demo17
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/home/clickBtn',
      name: 'clickbtn',
      component: clickbtn
    },
  ]
})
