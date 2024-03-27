<template>
  <div class="container">
    <!-- 无序列表 -->
    <MyCategory title="游戏">
      <template scope="data">
        <ul>
          <li v-for="(item,index) in data.mygames" :key="index">{{item}}</li>
        </ul>
      </template>
    </MyCategory>
    
    <!-- 有序列表 -->
    <!-- <MyCategory title="游戏">
      <ol>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ol>
    </MyCategory> -->

    <!-- h4  -->
    <!-- <MyCategory title="游戏">
      <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
    </MyCategory> -->
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue'

export default {
  name: 'App',
  components: {MyCategory},
  data() {
    return {
      
    }
  },
}
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>