<template>
  <div class="demo"> 
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: 'MyStudent',
  data () {
    return {
      name: '张三',
      sex: '男'
    }
  }
}
</script>

<style lang="less">
  
</style>