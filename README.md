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