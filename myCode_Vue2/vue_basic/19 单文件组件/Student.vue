 <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年龄:{{age}}</h2> 
  </div>
</template>

 <!-- 组件交互的相关代码 -->
<script>
  export default {
    name: 'Student', //最好和文件名一样
    data() {
      return {
        name: '张三',
        age: 15
      }
    }
  }
</script> 

