<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :mygames="games">我是一个默认值</slot>
  </div>
</template>

<script>  
export default {
  name: 'MyCategory',
  props: ['listData','title'],
  data() {
    return {
      games: ['红色警戒','穿越火线','原神','超级玛丽'],
    }
  }
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