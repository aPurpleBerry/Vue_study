<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition 
      appear
      name="animate__animated animate__brouce"
      enter-active-class="animate__swing"  
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">早上好</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'MyTest3',
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style>
h1 {
  background-color: orange;
}


</style>