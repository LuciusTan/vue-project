import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/pages/demo1/index.vue'
import demo2 from '@/pages/demo2/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Hello
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }

  ]
})
