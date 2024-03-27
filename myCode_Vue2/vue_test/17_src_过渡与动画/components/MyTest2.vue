<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="hello">
      <h1 v-show="isShow" key="1">早上好</h1>
      <h1 v-show="isShow" key="2">下午好</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MyTest2',
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
  /* 激活样式 方法一 */
  /* 哪个元素有动画就在哪里写transition */
  /* transition: 0.5s linear; */
}
/* 激活样式方法二 */
.hello-enter-active .hello-leave-active{
  transition: 0.5s linear;
}

/* 进入的起点和离开的重点是一样的 */
.hello-enter .hello-leave-to{
  transform: translateX(-100%);
}

/* 进入的终点和离开的起点一样 */
.hello-enter-to .hello-leave {
  transform: translateX(0);
}

</style>