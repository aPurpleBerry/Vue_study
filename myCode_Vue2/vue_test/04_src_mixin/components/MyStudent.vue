<template>
  <div>
    <h2 @click="showName">姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合
import {hunhe} from '../mixin'

export default {
  name: 'MyStudent',
  data () {
    return {
      name: '张三',
      sex: '男'
    }
  },
  mixins: [hunhe]
}
</script>
