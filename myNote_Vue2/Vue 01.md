# Vue

## 介绍

一套用于构建用户界面的渐进式JavaScript框架

- 特点

1、采用组件化模式，提高代码复用率，且让代码更好维护。

在Vue里面，一个.vue文件就是一个组件

2、声明式编码，让编码人员无需直接操作DOM，提高开发效率。

举例：如果有一组数据，想让他放入列表中。之前学过的方式叫命令式编码。

![image-20240315154641304](img/image-20240315154641304.png)

![image-20240315154745071](img/image-20240315154745071.png)

3、使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点。

![image-20240315154947024](img/image-20240315154947024.png)

 原生JS中，更新数据其实是把新数据替换掉原本的老数据，把“张三李四王五”替换原本的“张三李四王五”。但其实可以保留“张三李四王五”。

![image-20240315155409904](img/image-20240315155409904.png)

## 官方文档

Vue2

> [[Vue.js (vuejs.org)](https://v2.cn.vuejs.org/)](https://v2.cn.vuejs.org/v2/guide/installation.html)





## 安装

① script标签引入 ② npm引入（一般搭配 vue-cli）

目前先以 script引入

![image-20240315160929647](img/image-20240315160929647.png)

## 01 初步认识

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- 引入vue -->
  <script src="../js/vue.js"></script>
  <!-- 引入之后多了一个vue对象，也可以是vue函数，因为我们把函数当作对象或者函数
  全局多了一个vue 构造函数 -->
</head>
<body>
  
</body>
</html>
```



**打开控制台：**

![image-20240315161911241](img/image-20240315161911241.png)

有两个提醒 ① 下载开发者工具 ② 确保你处在开发模式而非生产模式



**在控制台敲击 Vue ，验证我们引入之后多了一个构造函数**

![image-20240315161553278](img/image-20240315161553278.png) 

<font color ="red">**处理提示：**</font>

① 管理扩展程序：

![image-20240315162043256](img/image-20240315162043256.png)

加入vue_dev_tools.crx

![image-20240315163917321](img/image-20240315163917321.png)

**②** 通过修改Vue的全局配置 ，处理提示

**【全局配置】：**`Vue.config` 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改它的 property。其中的 [productionTip](https://v2.cn.vuejs.org/v2/api/#productionTip) 设置为 `false` 以阻止 vue 在启动时生成生产提示。

```html
<script>
  Vue.config.productionTip = false
</script>
```

这里我修改了没变化，所以我在 下载的  vue.js 源码中改了



### 案例 1

```html
<!-- 引入vue -->
<script src="../js/vue.js"></script>
<!-- 引入之后多了一个vue对象，也可以是vue函数，因为我们把函数当作对象或者函数
  全局多了一个vue 构造函数 -->
  
<body>
  <div id="root">
    <h1>Hello {{name}}</h1>
  </div>
</body>
</html>
<script>
  //  全局多了一个vue 构造函数
  Vue.config.productionTip = false

  // 创建 Vue 实例
  // Vue构造函数中,只传一个参数,叫配置对象
  const x = new Vue({
    el: '#root', // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
    // el: document.getElementById('#root')
    data: {
      name: 'world'
    }
  })
</script>
```



### 总结

初识Vue:

1. 想让 Vue工作，就必须创建一个Vue实例，且要传入一个配置对象
2. root 容器里的代码依然符合html规范，只不过混入了一些特殊的 Vue语法
3. root 容器里的代码被称为【Vue模板】
4. Vue实例和容器是一一对应的;
5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用;
6. {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性;
7. 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新;



## 02 模板语法

Vue模板语法有两大类：

1. 插值语法（双大括号表达式）
2. 指令语法（以 v-开头）

**① 插值语法**

1. 功能: 用于解析<font color="red">标签体**内容**</font>
2. 语法: {{xxx}} ，xxx 会作为 js 表达式解析

**② 指令语法**

1. 功能: 解析标签<font color="red">**属性**</font>、解析标签体内容、绑定事件
2. 举例：v-bind:href = 'xxxx' ，xxxx 会作为 js 表达式被解析
3. 说明：Vue 中有很多的指令，此处只是用 v-bind 举个例子

### v-bind

> V:\Web\Vue_\myCode_Vue2\vue_basic\02 Template Syntax\模板语法.html

```html
<script src="../js/vue.js"></script>
<body>
  <div id="root">
    <h1>插值语法</h1>
    <h3>你好,{{name}}</h3>
    <hr>
    <a v-bind:href="school.url">点我去{{school.name}}</a>
  </div>
</body>
</html>

<script>
  const x = new Vue({
    el: '#root',
    data: {
      name: 'Vue',
      school: {
        name: 'baidu1',
        url: 'http://www.baidu.com'
      }
    }
  })
</script>
```



## 03 数据绑定

单向数据绑定 One-way Data-Binding 

双向数据绑定 Two-way Data-Binding



 **Vue中有2种数据绑定的方式：**

​     1.单向绑定(v-bind)：数据只能从data流向页面。

​     2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

​      备注：

​        ① 双向绑定一般都应用在表单类元素上（如：input、select等）

​        ② v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

 

```html
<script src="../js/vue.js"></script>

<body>
  <div id="root">
    单向数据绑定: <input type="text" v-bind:value="name"> <br>
    双向数据绑定: <input type="text" v-model:value="name">
      
      
    <!-- 如下代码是错误的，因为v-model只能应用在表单类元素上 (输入类元素)
        也就是value值 -->
    <h2 v-model:x="name">你好</h2>
  </div>
</body>
</html>

<script>
  const x = new Vue({
    el: '#root',
    data: {
      name:'hello world'
    }
  })
</script>
```

## 04 el和data的两种写法

  data与el的2种写法

​     1.el有2种写法

​         (1).new Vue时候配置el属性。

​         (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

​     2.data有2种写法

​         (1).对象式

​         (2).函数式

如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

​     3.一个重要的原则：

​         <font color="Red">由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了，而是window。</font>

### 绑定容器的两种方法：el的两种写法

```vue
const x = new Vue({})
console.log(x)
```

![image-20240315211950600](img/image-20240315211950600.png)

输出的是 x（vue的实例），

实例x的创造者（构造函数Vue），原型对象上的方法实例 x 都可以看见

![image-20240315212205884](img/image-20240315212205884.png)

这里使用 $mount

![image-20240315212306752](img/image-20240315212306752.png)

### data 的两种写法

- 第一种写法 对象是=式

```html
<body>
  <div id="root">
    <h1>你好</h1>
  </div>
</body>
</html>

<script>
  const x = new Vue({
    el: '#root',
    data: {
      name : "world"
    }
  })
</script>
```



- 第二种写法 函数式

data: function() {}  此处的this是vue对象，不能改成箭头函数

```javascript
  const x2 = new Vue({
    el: '#root',
    data: function() {
      console.log(this)  // 此处的this是vue对象
      return {
        name: 'world'
      }
    }
  })
  
  // 这里的可以简写为：
  const x3 = new Vue({
    el: '#root',
    data() {
      console.log(this)  // 此处的this是vue对象
      return {
        name: 'world'
      }
    }
  })
  
```

## 05 MVVM 模型

 MVVM pattern

1. M：模型(Model) ：对应 data 中的数据
2. V：视图(View) ：模板
3. VM：视图模型(ViewModel) ： Vue 实例对象

<img src="img/image-20240315213450152.png" alt="image-20240315213450152" style="zoom:67%;" />

<img src="img/image-20240315214711504.png" alt="image-20240315214711504" style="zoom:67%;" />



1.data中所有的属性，最后都出现在了vm身上。

2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

## 06 数据代理

从名字看出 这个是给对象添加/定义属性的

```javascript
  let person = {
    name: '张三',
    sex: '男',
  }

  Object.defineProperty(person, 'age', {
    value:18
  })

  console.log(person); // {name: '张三', sex: '男', age: 18}
```

在控制台可以看出，这个属性的颜色是淡一点的：

![image-20240316161723577](img/image-20240316161723577.png)

<font color="red">意思就是 age这个属性不可枚举，也就是说age属性**不参与遍历**。</font>

当``` console.log(Object.keys(person));```时，只能拿到 name sex属性。

如果想让它参与遍历，借助 <font color="red">**enumerable**</font>。控制属性是否可以枚举，默认值是false

```javascript
  Object.defineProperty(person, 'age', {
    value:18,
    enumerable: true
  })
```

<font color="red">此时age属性是不可修改的，要借助 **writable**</font>。控制属性是否可以被修改，默认值是false

```javascript
  Object.defineProperty(person, 'age', {
    value:18,
    enumerable: true,
    writable: true
  })
```

<font color="red">此时age属性不可被删除，借助**configurable**</font>。控制属性是否可以被删除，默认值是false

```
  Object.defineProperty(person, 'age', {
    value:18,
    enumerable: true,
    writable: true,
    configurable: true
  })
```

- 需求  number变量存储年龄，let person对象中的age跟随 number的变化而变化。

  <font color="red">**get: function()** </font> 当有人读取person的age属性时，get函数就会被调用，且返回值就是age的值

```javascript
 let number = 18
 let person = {
    name: '张三',
    sex: '男',
  }

  Object.defineProperty(person, 'age', {
    // 当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get: function() {
       return number
    },
      
    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值,[注意是收到 但没有设置 通过number 修改]
    set: function(value) {
        number = value
    }
    
  })
```

### 概念

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

- 案例 通过obj2操控obj

```javascript
let obj = {x:100}
let obj2 = {y:200}

Object.defineProperty(obj2,'x',{
  get(){
    return obj.x
  },
  set(value){
    obj.x = value
  }
})
```

### vue中的数据代理

```html
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'宏福科技园'
			}
		})
	</script>
```



在控制台中鼠标悬浮在 address name属性上，会有 [ invoke property getter]，发现这两个属性都有自己的setter getter

![image-20240316164937071](img/image-20240316164937071.png)

![image-20240316165828471](img/image-20240316165828471.png)

<img src="img/image-20240316171714159.png" alt="image-20240316171714159" style="zoom:80%;" />

1. Vue中的数据代理：

​       通过vm对象来代理data对象中属性的操作（读/写）

​    2. Vue中数据代理的好处：  

​       更加方便的操作data中的数据

​    3. 基本原理：

​       通过Object.defineProperty()把data对象中所有属性添加到vm上。

​       为每一个添加到vm上的属性，都指定一个getter/setter。

​       在getter/setter内部去操作（读/写）data中对应的属性。
