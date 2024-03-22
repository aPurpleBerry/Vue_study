<template>
  <div>
    <!-- <h2>{{msg}}</h2> -->
    <h2 v-text="msg"></h2>
    bu't't
    <MySchool></MySchool>
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
      
    }
  }
}
</script>

<style>

</style>