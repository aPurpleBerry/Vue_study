<template>
  <div>
    <!-- <h2>{{msg}}</h2> -->
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDom">点我输出上方的DOM元素</button>
    <MySchool ref="sch"></MySchool>
    <button @click="showDom2">点我输出上方的DOM元素</button>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue'

export default {
  name: 'App',
  components: {MySchool},
  data () {
    return {
      msg: '欢迎学习 VUE'
    }
  },
  methods: {
    showDom() {
      console.log(this); // 指向这个组件
      console.log(this.$refs.title);
    },
    showDom2() {
      console.log(this); // 指向这个组件
      console.log(this.$refs.sch); //
    },
  }
}
</script>

<style>

</style>