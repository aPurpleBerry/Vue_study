<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{age+1}}</h2>
  </div>
</template>

<script>
export default {
  name: 'MyStudent',
  data () {
    return {
      msg: '我是一个学生',
    }
  },
  // 简单接收
  // props: ['name', 'age', 'sex']

  // 接收的同时对数据进行 类型限制
  /*props: {
    name: String,
    age: Number,
    sex: String
  }*/

  //
  props: {
    name: {
      type: String, // name类型是字符串
      required: true // name必须要传
    },
    age: {
      type: Number,
      default: 99
      // 这里没有显示必须要传，如果没有传递，就使用默认值 99
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>
