<template>
  <div>
    <MyStudent></MyStudent>
    <hr>
    <MySchool></MySchool>
  </div>
</template>

<script>
import MyStudent from './components/MyStudent.vue'
import MySchool from './components/MySchool.vue'

export default {
  name: 'App',
  components: {MyStudent,MySchool}
}
</script>

<style>

</style>