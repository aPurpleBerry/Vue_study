# Vue 03

## 01 浏览器本地存储

localStorage 和 SessionStorage 统称为 webStorage。

1. 存储内容大小一般支持5MB左右(不同浏览器可能还不一样)

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API:

   setItem、getItem、removeItem、clear

4. 备注

① SessionStorage 存储的内容会随着浏览器窗口关闭而消失。

② LocalStorage 存储的内容，需要手动清除才会消失。

③ xxxxxStorage.getItem(xxx) 如果xxx对应的value获取不到，那么getltem的返回值是null。

④ JSON.parse(null) 的结果依然是 null。

### localStorage

<img src="img/image-20240325221759945.png" alt="image-20240325221759945" style="zoom:67%;" />

- 示例

```html
<body>
  <h1>localStorage</h1>
  <button class="btn">点我保存一个数据</button>
  <button class="btn2">点我删除一个数据</button>
  <button class="btn3">点我清空数据</button>
</body>
<script>
  let p = {name:'张三',age:16}

  document.querySelector('.btn').addEventListener('click',()=>{
    //存字符串
    window.localStorage.setItem('msg', 'hello!')
    // 存对象
    localStorage.setItem('person',JSON.stringify(p))

    // 读
    // localStorage.getItem('msg')
    console.log(localStorage.getItem('msg'));
    console.log(localStorage.getItem('person'));
    console.log(JSON.parse(localStorage.getItem('person')));
    // 当读取的key没有时，是null
  })

  document.querySelector('.btn2').addEventListener('click',()=>{
    //删除
    localStorage.removeItem('msg')
  })

  document.querySelector('.btn3').addEventListener('click',()=>{
    localStorage.clear()
  })
</script>
```



### SessionStorage

API 和 localStorage 一样。getItem、SetItem、removeItem、clear（JSON.stringify、JSON.parse）

区别在关闭浏览器时，SessionStorage中存储的就失去