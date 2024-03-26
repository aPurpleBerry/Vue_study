<template>
  <div class="student"> 
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="unbind">解绑atguigu事件</button>
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
  },
  methods:{
    sendStudentName() {
      this.$emit('atguigu',this.name)
      this.$emit('atguigu2')
    },
    unbind() {
      // this.$off(['atguigu','atguigu2'])
      this.$off()
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