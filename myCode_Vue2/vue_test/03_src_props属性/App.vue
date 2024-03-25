<template>
  <div>
    <MyStudent name="李四" sex="女" :age="20"></MyStudent>
  </div>
</template>

<script>
import MyStudent from './components/MyStudent.vue'

export default {
  name: 'App',
  components: {MyStudent}
}
</script>

<style>

</style>