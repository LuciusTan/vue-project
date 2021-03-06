# Vue基础知识梳理
> 此笔记跟随github仓库内容，对比代码查看，页面文件路径 src/pages/demo1-10 (test页面是小demo，需要在环境内运行查看) ，[点我前往](https://github.com/LuciusTan/vue-project)

## Section 1 生命周期 - demo1
1. beforeCreate
2. created

3. beforeMount
4. mounted

5. beforeDestory
6. destoryed

---

## Section 2 利用npm、git搭建vue环境

### 1.安装node.js 
##### 安装完之后检查：
`node-v`
`npm-v`

### 2.安装vue(全局安装)
`npm install --global vue-cli`

### 3.初始化webpack项目
```
//以项目名为 'my-project' 为例
vue init webpack my-project
```

### 4.安装依赖包，打包项目
##### ！首先进入项目文件夹
`cd my-project`

### 5.安装npm (npm版本号不一致时会修改package-lock.json文件)
##### 安装npm，避免版本问题
`npm install -no--save`

### 6.打包项目，部署到localhost:8080
`npm run dev`

---

## Section 3 如何建立页面
### 1.在src文件夹下创建vue格式的页面文件，以demo页面为例 
##### 例如在此路径创建：src/pages/demo/index.vue

### 2.修改router->index.js(@ 指src)
##### ① 导入页面
 `import hello from '@/pages/demo/index.vue'`

##### ② 添加router
```
{
    path: '/demo',
    name: 'demo',
    component: hello
}
```

### 3.浏览器中打开localhost:8080/#/demo

---

## Section 4 数据选项 - demo2
### 1.data
##### 用于各种参数

### 2.computed/methods
##### 存放函数，methods 服务于各种事件

---

## Section 5 模板语法 - demo3
### 1.data
##### 在data的return中设置变量e，templete中可使用{{ e }}进行绑定

### 2.模板中直接嵌入js代码
`{{ number + 1 }}`
  
### 3.指令 v-html、v-on、v-bind等
#### Ⅰv-html:
##### data中指定变量，例如：
###### 在data的返回值return种设置
`spanHtml: '<span>123</span>'`
###### 在templete中设置
`<div v-html='spanHtml'></div>`
###### 结果：
`<div><span>123</span></div>`

#### Ⅱv-bind:
##### 使templete中的值与data中的变量绑定，实现动态化
###### 例如：动态化添加class
###### 简写 v-bind:class -> :class

#### Ⅲ v-on:
##### 绑定事件(事件函数写在methods里面)，简写：
`v-on:click='functionName' `等同于 `@click = 'functionName'`

##### @click.stop
###### 阻止事件冒泡
    
### 4.计算属性
#### computed
```
//模板中放入太多逻辑会让模板过重且难以维护，所以计算属性下所有函数可以放到computed，例如： 
<div>在模板内直接嵌入js：{{newMsg.split('').reverse().join('')}}
</div>
<div>使用计算属性：
{{reverseMsg}}
</div>
//reverseMsg函数定义在computed内
```

### 5.过滤器
`{{message | capitalize }}`
##### data内定义message
##### filters里面定义过滤规则函数capitalize 

---

## Section 6 class与style绑定 - demo4
### 1.class绑定
##### 绑定方式1：
`{'active':isActive,'text-danger':hasError}`
##### 绑定方式2：
`classObject`
##### 绑定方式3：
`[activeClass,errorClass]`

### 2.style绑定
##### 绑定方式1：
`{'color':activeColor,'fontSize':fontsize+'px'}`
##### 绑定方式2：
`styleObject`
##### 绑定方式3：
`[bassStyles,overridingStyles]`

---

## Section 7 条件渲染 - demo5
### 1.v-if

### 2.v-if v-else

### 3.v-if v-else-if v-else

---

## Section 8 列表渲染 - demo6
### 1.v-for
> VScode使用v-for进行列表渲染报错解决方案
* 在Vetur插件的json配置中添加 `"vetur.validation.template": false`
#### 用法1：v-for = 'items in items' 数组
#### 用法2：v-for = "(item,index) in items" 数组
#### 用法3：v-for = "(value, key) in object" 对象

---

## Section 9 表单控件绑定 - demo9

v-model 指令在表单控件元素上创建双向数据绑定

复选框/多个勾选框/选择列表

## Section 10 自定义组件 - demo10
### 1.组件写到components文件夹下

例如：自定义个一个倒计时组件

步骤：

1. components写组件
2. import 引用到页面 
`import mycomponent from '@/components/mycomponent.vue'`
3. 注册组件 
```
components:{
  mycomponent
  //亦可为标签命名
  "my-conponement": mycomponent;
}
```
4. templete中使用，以标签的形式  
`<mycomponent></mycomponent>、<my-component></my-component>`
      
### 2.基本要素：props、$emit等
* props用来传值，可定制各页面不同效果
* $emit用来处理各页面组件事件结束后的自有事件
  
### 3.通过import导入自定义组件

---

## Section 11 DOM操作 - demo11
### 1.this.$refs
> mounted中DOM已经生成，为真实DOM，所以DOM操作在mounted函数内进行，例如： 
`this.$refs.head.innerHTML = 'hello Vue'`

---

## Section 12 过渡效果 - demo12
### 1.<transition></transition>标签的形式写在templete中
### 2.通过样式方式写过渡, 以fade为例
```
fade-leave(可忽略) -> fade-leave-active -> fade-leave-to
fade-enter -> fade-enter-active -> fade-enter-to(可忽略)
```

---

## Section 13 路由 vue-router - demo13
> npm install 引入vue-router包（自建项目需要）, 若使用vue init生成的项目可忽略此步

### 1.页面跳转功能

用法1：
`<router-link to='/demo1'>demo1</router-link>`

用法2：
```
<router-link :to="{name:'demo1', params:{userId: 123}}">demo1</router-link>
跳转并传值，需要修改index.js 中 path: '/demo9/:userId'
获取传值，demo9页面中，写在mounted内，this.$route.params.userId
url传参(query) :to="{name:'demo9',params:{userId:123},plan:'private'}"
    localhost:8080/#/demo9/123?plan=private
获取传值，demo9页面中，写在mounted内，this.$route.query.plan
```

用法3：
```
this.$router.push({path:'/demo1'})
dom绑定事件(<button @click="toUrl">跳转页面demo2</button>)，toUrl方法写在methods内
```

用法4：
```
this.$router.push({name:'demo1',params:{userId:123}})
dom绑定事件(<button @click="toUrl">跳转页面demo2</button>)，toUrl方法写在methods内，与标签跳转一致，可传参
```

---

## Section 14 状态管理vuex - demo14

多页面传数据不适合用router-link,利用vuex使用公共数据池

`npm install --save vuex`

全局页面状态管理，所有页面共享数据

取数据步骤：

1. 导入vuex 找到src下的main.js文件 修改main.js文件
```
import store from './store/'
//然后在new Vue中添加store
```   

2. 在src下创建store文件夹，在store文件夹下创建index.js文件，编辑index.js文件
```
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  export default new Vuex.Store({
      //两个共享数据
      state: {
          count: 0,
          num: 1
      },
      mutations: {
          increment (state, num){
              state.count ++
              state.num = num;
          }
      },
      //actions里调用mutations里面的方法
      actions: {
          increment({ commit }, obj){
              commit('increment', obj)
          }
      }
  })
```

3. 在页面中调用 this.$store.state.count 可获取到store内的count值

改数据步骤:
`this.$store.dispatch('increment',100000)`

---

## Section 15 slot插槽 - demo15

常用于组件调用中，例如：

```
import slots from '@/components/slot.vue'
components:{
    "slot-test":slots
}
<slot-test>
  <div>123</div>
  <p>456</p>
  <p slot="bottom">888</p>
</slot-test>
```

---

## Section 16 vue-resource请求 - demo16
1. 引入vue-resource包
`npm install --save vue-resource`

2. 修改main.js -> import 与 Vue.use

3. 发送请求
```
mounted(){
  //get
  this.$http.get('/someUrl').then(response => {
    console.log(response.body);
  }, response => {
    //error callback
  });
  //post
  this.$http.post('someUrl',{foo:'bar'}).then(response => {
    console.log(response.body);
  }, response => {
    //error callback
  });
  //传参
  this.$http.get("someUrl", {
      params: { foo: "bar" },
      headers: { "X-Custom": "..." }
  })
  .then(
    response => {
      console.log(response.body);
    },
    response => {
      //error callback
    }
  );
}
```
  
---

## Section 17 Mint UI组件库 - demo17
1. `npm install --save mint-ui`
2. 修改main.js -> import 与 Vue.use
3. 导入样式
`import 'mint-ui/lib/style.css'`
4. 页面中导入(以Toast为例) 
`import { Toast } from 'mint-ui';`
5. 在mounted里面直接调用 Toast('提示信息');


## Section 18 一个小demo - home/detail
> 此demo为移动端项目

1.在App.vue中注释掉vue logo和页面默认样式，在main.js中引用 
`import './config/rem'`

2.`npm install px2rem-loader`

3.修改build -> untils.js

修改:
```
const px2remLoader = {
  loader: 'px2rem-loader',
  options: {
    remUnit: 50 //自定义
  }
}
// generate loader string to be used with extract text plugin
function generateLoaders (loader, loaderOptions) {
const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader,px2remLoader]
```

4.自动转化

width: 20px;          自动将20px转化为rem

height: 40px; /*no*/  禁止将40px转化成rem

5.设计稿宽度是多少px就将页面宽度拉至该px值，查看html style宽度是多少，将上方px2remLoader的remUnit值做出相应修改

6.<li>标签设置inline-block，代码内换行会多出4px的间隔，高度也会影响

解决方法多种，1) 代码不换行；2) 父盒子加上font-size:0;




















