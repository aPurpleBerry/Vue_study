<template>
  <div class="app"> 
    <h1>{{msg}}</h1>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div> 
</template>

<script>
import MyStudent from './components/MyStudent.vue'
import MySchool from './components/MySchool.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '你好啊！',
      studentName:''
    }
  },
  components: {MyStudent,MySchool}
}
</script>

<style>
.app {
  background-color: grey;
  padding: 5px;
}
</style>