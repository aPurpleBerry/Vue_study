# Vue 02

> B站 Vue全家桶（BV1Zy4y1K7SH） 学习笔记

## 01 组件

### 引入

- 传统方式的局限性

 <img src="img/image-20240321204253212.png" alt="image-20240321204253212" style="zoom: 50%;" />

- 组件方式编写

 <img src="img/image-20240321204438961.png" alt="image-20240321204438961" style="zoom: 50%;" />

**组件的定义—实现应用中局部功能代码和资源的集合**

 <img src="img/image-20240321204637600.png" alt="image-20240321204637600" style="zoom:50%;" />

### 概念

**模块**

1. 理解: 向外提供特定功能的 js 程序, 一般就是一个 js 文件
2. 为什么: js 文件很多很复杂
3. 作用: 复用 js, 简化 js 的编写, 提高 js 运行效率

**组件**

1. 理解: 用来实现局部(特定)功能效果的代码集合(html/css/js/image…..)
2. 为什么: 一个界面的功能很复杂3. 作用: 复用编码, 简化项目编码, 提高运行效率

**模块化**

当应用中的 js 都以模块来编写的, 那这个应用就是一个模块化的应用。

**组件化**

当应用中的功能都是多组件的方式来编写的, 那这个应用就是一个组件化的应用,。

### 组件的两种编写形式

非单文件组件：一个文件中包含有n个组件。
单文件组件∶一个文件中只包含有1个组件。

#### ① 非单文件组件

- 示例

显示信息 学校（名字，地址），学生（姓名，年龄）。name会重复，所以创建学校组件和学生组件。

**第一步 创建组件**

![image-20240321221058408](img/image-20240321221058408.png)

template ：需要一个根元素

**第二部 注册组件(以局部注册为例)**

 <img src="img/image-20240321221232338.png" alt="image-20240321221232338" style="zoom:67%;" />

**第三步使用组件**

 <img src="img/image-20240321221458148.png" alt="image-20240321221458148" style="zoom:80%;" />



##### 基本使用

Vue中使用组件的三大步骤：

一、定义组件(创建组件)

二、注册组件

三、使用组件(写组件标签)



**一、如何定义一个组件？**

使用 Vue.extend(options) 创建，其中 options 和 new Vue(options) 时传入的那个options几乎一样，但也有点区别；

 区别如下：

- 1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。   
- 2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。

 备注：使用template可以配置组件结构,但必须有一个根节点。

**二、如何注册组件？**

 1.局部注册：靠new Vue的时候传入components选项

 2.全局注册：靠Vue.component('组件名',组件)

**三、编写组件标签：**

``` <school></school>```

##### 使用细节

**1.关于组件名:**

- 一个单词组成：

​       第一种写法(首字母小写)：school  使用时 ``` <school></school>```

​       第二种写法(首字母大写)：School  使用时 ```<School></School>```

- 多个单词组成：

​       第一种写法(kebab-case命名)：my-school

​                  局部注册 components: 'my-school': s  。使用``` <my-school></my-school>```

​       第二种写法(CamelCase命名)：MySchool  **(需要Vue脚手架支持)**

​                  局部注册 components: 'MySchool': s  。使用``` <MySchool></MySchool>```

​    **注意：**

​      (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。

​      (2).可以使用name配置项指定组件在开发者工具中呈现的名字。

<img src="img/image-20240322134604303.png" alt="image-20240322134604303" style="zoom:50%;" />

**2.关于组件标签**

​    第一种写法：```<school></school>```

​    第二种写法：```<school/>```

​    备注：不用使用脚手架时，```<school/>``` 会导致后续组件不能渲染。

**3.组件定义的简写方式**

​    const school = Vue.extend(options) 可简写为：const school = options

```javascript
//定义组件
const s = Vue.extend({
  name:'atguigu',
  template:`
    <div>
      <h2>学校名称：{{name}}</h2>	
      <h2>学校地址：{{address}}</h2>	
    </div>
  `,
  data(){
    return {
      name:'尚硅谷',
      address:'北京'
    }
  }
})

// 简写为：
//定义组件
const s = {
  name:'atguigu',
  template:`
    <div>
      <h2>学校名称：{{name}}</h2>	
      <h2>学校地址：{{address}}</h2>	
    </div>
  `,
  data(){
    return {
      name:'尚硅谷',
      address:'北京'
    }
  }
}
```

##### 组件嵌套

student 组件 是 school 组件 的子组件

- 实例

```html
<body>
  <div id="root">
    <h1>{{msg}}</h1>
    <school></school>
  </div>
</body>

<script>
  //定义student组件
  const student = Vue.extend({
    name:'student',
    template:`
      <div>
        <h2>学生姓名：{{name}}</h2>	
        <h2>学生年龄：{{age}}</h2>	
      </div>
    `,
    data(){
      return {
        name:'尚硅谷',
        age:18
      }
    }
  })

  const school = Vue.extend({
    name: 'school',
    template: `
      <div>
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
        <student></student>
      </div>
    `,
    data: function() {
      return {
        name: 'xxx大学',
        address: 'xxx省xxx市'
      }
    },
    components: {
      student
    }
  })


  new Vue({
    el: '#root',
    data: {
      msg: '开学了'
    },
    components: {
      school
    }
  })
</script>
```

<img src="img/image-20240322140403761.png" alt="image-20240322140403761" style="zoom:67%;" />

<font color="red">开发中常用组件 app，用于管理页面中所有的组件。</font>

 <img src="img/image-20240322140644413.png" alt="image-20240322140644413" style="zoom:50%;" />



 <img src="img/image-20240322140908678.png" alt="image-20240322140908678" style="zoom:67%;" />

  <img src="img/image-20240322140939268.png" alt="image-20240322140939268" style="zoom:80%;" />

##### 组件本质 VueComponent

 console.log('@',school)

![image-20240322141310122](img/image-20240322141310122.png)

**打印组件school 发现它是一个函数，实际上它是一个构造函数。**

```javascript
//定义school组件
const school = Vue.extend({
  name:'school',
  template:`
    <div>
      <h2>学校名称：{{name}}</h2>	
      <h2>学校地址：{{address}}</h2>	
      <button @click="showName">点我提示学校名</button>
    </div>
  `,
  data(){
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
  methods: {
    showName(){
      console.log('showName',this)
    }
  },
})
```

**在源码中搜索VueComponent可以发现 **

![image-20240322141531606](img/image-20240322141531606.png)



**<font color="red">关于VueComponent</font>**

<font color="red">(1) school组件本质是一个名为**VueComponent的构造函数**，且不是程序员定义的，是Vue.extend生成的。</font>

<font color="red">(2) 我们只需要写```<school/>```或```<school></school>```，Vue解析时会帮我们创建school组件的**实例对象**，即Vue帮我们执行的：new VueComponent(options)。</font>

<font color="red">(3) 特别注意：每次调用Vue.extend，返回的都是一个**全新**的VueComponent！！！！</font>

通过源码得知 Vue.extend是函数，在 Vue.extend中会返回一个新的VueC omponent

<font color="red">**(4) 关于this指向：**</font>

​        A. 组件配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。

​        B. new Vue(options)配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

<font color="red">(5) VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。</font>

​       Vue的实例对象，以后简称vm。

##### 重要的内置关系

原型回顾：

<img src="img/image-20240322145123552.png" alt="image-20240322145123552" style="zoom:80%;" />

```console.log(Demo.prototype  ===  d.___proto__)``` 结果为TRUE



 <img src="img/image-20240322145724209.png" alt="image-20240322145724209" style="zoom:80%;" />

```console.log(d)```  :

输出d，d是构造函数 Demo 的实例对象，它自身是没有 x 属性的。所以通过隐式原型属性查找。

<img src="img/image-20240322145712861.png" alt="image-20240322145712861" style="zoom:80%;" />



<font color="red">**一个重要的内置关系：**```VueComponent.prototype.__proto__ === Vue.prototype```</font>

```javascript

//定义school组件
const school = Vue.extend({
  name:'school',
  template:`
    <div>
      <h2>学校名称：{{name}}</h2>	
      <h2>学校地址：{{address}}</h2>	
      <button @click="showX">点我输出x</button>
    </div>
  `,
  data(){
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
  methods: {
    showX(){
      console.log(this.x)
    }
  },
})

//创建一个vm
const vm = new Vue({
  el:'#root',
  data:{
    msg:'你好'
  },
  components:{school}
})
```



<font color="red">1.一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype</font>

<font color="red">2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。</font>

解释分析：

（1）```<script type="text/javascript" src="../js/vue.js"></script>```引入 vue.js后，全局多了一个Vue构造函数。

【JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象】 所以 构造函数 Vue中有一个 prototype 属性，指向 Vue 原型对象。

通过构造函数 构造出的实例对象，都可以访问 原型对象 上的方法与属性。

（2）const vm = new Vue({}) 

 实例对象 vm 中 有隐式原型属性 ```__proto__ ```,也指向原型对象。

（3）Vue的原型对象，也是对象，所以它里面也有一个 隐式原型属性 ```__proto__ ```，指向Object的原型对象。

**实例的隐式原型属性（proto）永远指向自己缔造者 的原型对象。**

【对象都会有一个属性 ```__proto__``` 】

<img src="img/image-20240322151143749.png" alt="image-20240322151143749" style="zoom:80%;" />

（4）有一个构造函数 VueComponent ，构造函数身上有一个 prototype 属性，指向 VueComponent 的原型对象。

<img src="img/image-20240322152130078.png" alt="image-20240322152130078" style="zoom:80%;" />

#### ② 单文件组件

单文件组件的 格式是 ：XXX.vue

注意 XXX.vue 不能直接交给浏览器运行，所以得先进行处理和加工。有两个渠道：① webpack ② vue-cli （官方帮忙搭建的 webpack ）

- 示例

（1）起名注意事项（加粗的为推荐）

单个单词：school.vue  或者 **School.vue** 

多个单词：my-school.vue  或者 **MySchool.vue** 

（2）组件是资源（HTML CSS JS）的集合

为了迎合组间比较常见的属性， vue文件设计出了三个标签

<img src="img/image-20240322153230840.png" alt="image-20240322153230840" style="zoom:80%;" />

（3）代码格式

注意： template不参与结构编译

export：

 <img src="img/image-20240322154137892.png" alt="image-20240322154137892" style="zoom:67%;" />

**最终写为：**

 <img src="img/image-20240322154531479.png" alt="image-20240322154531479" style="zoom:80%;" />

（4）必须要有App.vue 汇总所有的组件

 <img src="img/image-20240322155930983.png" alt="image-20240322155930983" style="zoom:67%;" />

 （5） 浏览器不认识 ES6语法，必须要使用脚手架 <img src="img/image-20240322155837960.png" alt="image-20240322155837960" style="zoom:80%;" />

## 02 Vue CLI

command line interface

### 介绍 & 文档

1. Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。
2. 最新的版本是 4.x。
3. 文档: https://cli.vuejs.org/zh/。

### 安装

<img src="img/image-20240322164833255.png" alt="image-20240322164833255" style="zoom:80%;" />

下载完之后，关闭CMD，再打开，输入vue

<img src="img/image-20240322165004732.png" alt="image-20240322165004732" style="zoom:80%;" />

### 使用步骤

（1）配置 npm 淘宝镜像：npm config set registry https://registry.npm.taobao.org

![image-20240322165712061](img/image-20240322165712061.png)

（2）vue create vue_test

 <img src="img/image-20240322165903237.png" alt="image-20240322165903237" style="zoom: 80%;" />

babel： ES6转ES5

eslint：语法检查

<img src="img/image-20240322170156610.png" alt="image-20240322170156610" style="zoom:80%;" />

输入完 npm run serve之后：

<img src="img/image-20240322170243489.png" alt="image-20240322170243489" style="zoom:80%;" />

他开启了内置的服务器：端口在8080

local是本机访问

network是可以给同局域网的其他人使用（在连接同一个wifi的情况下，用手机可以访问这个）

### 脚手架结构

.gitignore：git的忽略文件

babel.config.js：babel的控制文件

package-lock.json和package.json：只要打开的工程是符合npm规范，那么就会有package.json报的说明书；package-lock.json是包版本控制文件

-----

- main.js

执行了 npm run serve之后，直接运行 main.js

<img src="img/image-20240322172117218.png" alt="image-20240322172117218" style="zoom:80%;" />

在 main.js中发现 import App ，所以去App.vue 里；

在App.vue中又看到了 import School 和 Student，所以引入。

在main.js发现他挂载到 app上。



- 报错：VUE中的 文件名 要用多个单词

### render

一般来说 引入  都是要具体一个路径（XX文件下的） ，比如 import App from './App.vue'

但是第三方库 就不用， 比如  import Vue from 'vue'

注意 通过跳转，我们可以知道 这个 import Vue from 'vue' 引入的是不完全的 vue



找到 vue 底下的 package.json。module的意思是，在使用ES6引入的时候，引入的其实是 vue.runtime.esm.js

<img src="img/image-20240322180504812.png" alt="image-20240322180504812" style="zoom:80%;" />

这是因为 vue包含 核心+模板解析器：只需要有精简部分

<img src="img/image-20240322211817838.png" alt="image-20240322211817838" style="zoom:80%;" />

render的用处就是 解析模板。



 **关于不同版本的Vue：**

  1.vue.js与vue.runtime.xxx.js的区别： 

​    (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。

​    (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用

   render函数接收到的createElement函数去指定具体内容。

### 默认配置

脚手架依托WEBPACK，webpack.config.js(配置文件，配置入口，出口文件的路径)。Vue把重要的配置文件隐藏了。



- Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：```vue inspect > output.js```

<img src="img/image-20240322203152829.png" alt="image-20240322203152829" style="zoom:80%;" />

注意 在这个文件夹中修改是没有用的，只是输出给你看一下。

- 哪些东西不能随便改（以下五个不能随便改）

public 文件夹、index.html、favicon.ico

src文件夹

main.js

- 怎么改默认配置？

vue.config.js

> https://cli.vuejs.org/zh/config/#pages

<img src="img/image-20240322204844210.png" alt="image-20240322204844210" style="zoom:80%;" />

 

<font color="red">**脚手架文件结构**</font>

<img src="img/image-20240322210227036.png" alt="image-20240322210227036" style="zoom:80%;" />

<font color="red">**关于不同版本的Vue**</font>

- vue.js与vue.runtime.xxx.js的区别： 

​    (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。

​    (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

- 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用

   render函数接收到的createElement函数去指定具体内容。

<font color="red">**vue.config.js配置文件**</font>

使用 vue inspect > output.js可以查看到 Vue 脚手架的默认配置.
使用 vue.config.js 可以对脚手架进行个性化定制，详情见: https://cli.vuejs.org/zh

### ref 属性

想拿到一个 DOM 节点，不使用原生 JS 方法，就需要借助ref属性。

<img src="img/image-20240325145602228.png" alt="image-20240325145602228" style="zoom:80%;" />



**注意 也可以给组件标签加上一个ref**

<img src="img/image-20240325145752964.png" alt="image-20240325145752964" style="zoom: 80%;" />

第二个输出为 school 组件

<img src="img/image-20240325145854752.png" alt="image-20240325145854752" style="zoom:80%;" />

注意 ref拿到的是组件实例对象，id（document.querySelector）拿到的是DOM 元素

<font color="red">**ref属性 总结：**</font>

1.被用来给元素或子组件注册引用信息(id的替代者)

2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)

3.使用方式:

打标识:``` <h1 ref="xxx">....</h1>```或```<School ref="xxx"></School>```

获取：this.$refs.xxx

### props配置

我有一个组件 MyStudent，用于展示组件信息，我的组员也想用这个组件，但它的数据和我不一样，怎么办？

——需要一个外部传递进来一个参数

我原本的组件：

 <img src="img/image-20240325151015571.png" alt="image-20240325151015571" style="zoom: 67%;" />

- **基本使用如下：**

<img src="img/image-20240325151433348.png" alt="image-20240325151433348" style="zoom:80%;" />

 <img src="img/image-20240325151448626.png" alt="image-20240325151448626" style="zoom:80%;" />



- 想对传递进来的数据（年龄+1）

传递进来的数据存储在 vc（school组件实例） 上，但不在data属性中。

注意：在传递数据的时候，格式一定要为 key="value"，就算是数据也要这么写（age="20"），不然会报错。但传递到 vc 后，age变成了字符串。

**解决方法：**

加了一个冒号，意思是动态绑定，意思是，我确实想给你传递一个值，叫age，但是它的值是引号内表达式的结果。

 <img src="img/image-20240325152222984.png" alt="image-20240325152222984" style="zoom:80%;" />

- 上述方法完善：在接收数据的组件中做一个限制

<img src="img/image-20240325152721436.png" alt="image-20240325152721436" style="zoom:80%;" />

开发中简单接收用的多。

- **传递进来的数据不可以修改**

如果需要修改怎么办？

如果在data中有一个name:'张三'，传递进来也有一个name:'李四'，最终页面显示的是李四。可以看出在同名的情况下传递进来的数据优先级高。

（如果需要修改age）解决方法如下：

 <img src="img/image-20240325153401525.png" alt="image-20240325153401525" style="zoom:80%;" />

- **不是所有东西都可以传递**

 <img src="img/image-20240325153509514.png" alt="image-20240325153509514" style="zoom:80%;" />

被vue征用 

传递key无效！



<font color="red">**配置项 props总结：**</font>

功能:让组件接收外部传过来的数据

（1）传递数据

```
<Demo name="xxx"/>
```

（2）接收数据

```
第一种方式（只接收）
	props:['name']
	
第二种方式（限制类型）
	props: {
		name: Number
	}
第三种方式（限制类型、限制必要性、指定默认值）
	props: {
		name: {
			type: String,
			required: true,
			default: '老王'
		}
	}
```

**备注：props是只读的，Vue底层会监测你对props的修改,如果进行了修改,就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。**

### mixin配置项

> mixin混入

两个组件共享一个配置（函数）：

<img src="img/image-20240325154623454.png" alt="image-20240325154623454" style="zoom:80%;" />

- 使用方式：

 <img src="img/image-20240325155024326.png" alt="image-20240325155024326" style="zoom:80%;" />

 <img src="img/image-20240325155054991.png" alt="image-20240325155054991" style="zoom:67%;" />



混合中可以写 data mounted methods

- 原则：data methods 你没有的 听混合的，你有的 听你的。但是 mounted 都要

- 上述方式是局部混合，全局混合在 main.js 上

 <img src="img/image-20240325155410643.png" alt="image-20240325155410643" style="zoom: 67%;" />



<font color="red">**混入mixin总结：**</font>

功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：

```
第一步 定义混入
{
	data(){...}
	methods: {...}
	...
}

第二部使用混入
（1）全局混入 在main.js中 Vue.mixin(xx)
（2）局部混入 在组件中  import + mixins: ['xxx']
```

### 插件

Vue 中的 插件是一个对象，里面要包含 install

- 自定义组件

 <img src="img/image-20240325160200400.png" alt="image-20240325160200400" style="zoom:67%;" />

 <img src="img/image-20240325160221455.png" alt="image-20240325160221455" style="zoom:67%;" />

- install 可以携带参数

 <img src="img/image-20240325160352631.png" alt="image-20240325160352631" style="zoom:67%;" />

 <img src="img/image-20240325160450223.png" alt="image-20240325160450223" style="zoom:67%;" />

这是 vm 的缔造者，Vue**构造函数**



可以在这里 使用全局过滤器、定义全局指令、定义全局混入

 <img src="img/image-20240325160748424.png" alt="image-20240325160748424" style="zoom:67%;" />



<font color="red">**插件总结：**</font>

功能：用于增强Vu

本质：包含 install 方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

定义插件：对象.install = function( Vue,options ) {}

使用插件：Vue.use() 

### scoped 样式

脚手架中编写样式的技巧。

不同组件中的样式类名会冲突。

- **解决方法：style scoped**

 <img src="img/image-20240325161657220.png" alt="image-20240325161657220" style="zoom: 80%;" />

- **有一个组件不适用：App.vue**

意思是style scoped也会生效。但是一般在 App.vue中写的样式 都是在全局使用的。

- vue中支持 less（要安装less-loader） css

 <img src="img/image-20240325161951077.png" alt="image-20240325161951077" style="zoom:80%;" />

npm i less-loader会出错，因为兼容性问题。这个loader是在webpack 5中，但是教学视频中vue-cli使用的是 4.X版本，所以出错。但是在我 下载的时候没有出错。

注意不写lang的话，默认为CSS

### 案例：To do list

<font color="red">**组件化编码流程（通用）**</font>

1.实现静态组件：抽取组件，使用组件实现静态页面效果

2.展示动态数据：

​       数据的类型、名称是什么？

​       数据保存在哪个组件？

3.交互——从绑定事件监听开始



- 第一步：实现静态组件

组件的划分：按照功能划分

 <img src="img/image-20240325163050984.png" alt="image-20240325163050984" style="zoom:67%;" />

老师写好了一个静态页面，我们需要拆分（实际公司开发中也是这个逻辑）。

- 第二步：动态数据

用 数组，数据每一个元素是 对象（每一个对象必须有标识符ID）



- **添加数据**

MyHeader

添加数据：每条数据的ID应该是后端分配，但在这我们自行分配，使用nanoid(npm i nanoid)。import {nanoid} from 'nanoid' ,使用方法为：nanoid()

传递数据：有问题。问题出在我们之前把 数据放在了 MyList中，但是MyList和MyHeader是平级关系，兄弟组件之间的传递方式还没有学。

- **父组件与子组件的传递：**

子组件想传数据给父组件（父组件 最开始就传递了一个函数给子组件）

父组件传递数据给子组件，```<child key="value">```，在子组件中用props

- 注意注意：如果props里面是对象，修改对象的属性vue是检测不到的。obj={a:1}, a=2检测不到，因为obj的地址没有发生变化

<img src="img/image-20240325180206843.png" alt="image-20240325180206843" style="zoom:80%;" />

- 删除数据

 <img src="img/image-20240325214858380.png" alt="image-20240325214858380" style="zoom:67%;" />

可以写成下面这种形式，（isAll是计算属性）。但是不能用简写形式（简写形式默认为只读）

  <img src="img/image-20240325221242955.png" alt="image-20240325221242955" style="zoom: 67%;" />

