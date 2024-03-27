<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot>我是一个默认值</slot>
  </div>
</template>

<script>  
export default {
  name: 'MyCategory',
  props: ['listData','title']
}
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
    overflow: hidden;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
  img {
    width: 100%;
  }
</style>