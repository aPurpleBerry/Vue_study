 <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2> 
  </div>
</template>

 <!-- 组件交互的相关代码 -->
<script>
  export default {
    name: 'School', //最好和文件名一样
    data() {
      return {
        name: 'A大学',
        address: 'A地'
      }
    },
    methods: {
      
    }
  }
</script>


 <!-- 组件的样式 -->
<style>
  .demo {
    background-color: orange;
  }
</style>