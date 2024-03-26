<template>
  <div class="app"> 
    <h1>{{msg}},同学：{{studentName}}</h1>
    <MySchool :getSchoolName="getSchoolName"></MySchool>
    <!-- <MyStudent v-on:atguigu="getStudentName"></MyStudent> -->
    
    <!-- 第二种绑定自定义事件的方式方式 -->
    <MyStudent ref="student" @click.native="show"></MyStudent>
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
  components: {MyStudent,MySchool},
  methods: {
    getSchoolName(name) {
      console.log('APP收到了学校名：'+name);
    },
    getStudentName(name) {
      this.studentName = name
    },
    show(){
      alert(123)
    }
  },
  mounted(){
    // 通过ref属性找到实例对象，在其身上挂在自定义事件
    this.$refs.student.$on('atguigu',this.getStudentName)

    // this.$refs.student.$on('atguigu', name => {
    //   console.log('APP收到了学校名：'+name);
    //   this.studentName = name
    // })

  }
}
</script>

<style>
.app {
  background-color: grey;
  padding: 5px;
}
</style>