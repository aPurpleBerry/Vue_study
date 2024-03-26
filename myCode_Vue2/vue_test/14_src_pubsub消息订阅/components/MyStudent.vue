<template>
  <div class="student"> 
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendToSchool">点我给school发送数据</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'MyStudent',
  data () {
    return {
      name: '张三',
      sex: '男'
    }
  },
  methods: {
    sendToSchool(){
      pubsub.publish('hello',666)
    }
  }
}
</script>

<style lang="less">
  .student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px
  }
</style>