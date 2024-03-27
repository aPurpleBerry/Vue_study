<template>
  <div class="container">
    <MyCategory title="美食" >
      <img :src="grill">
    </MyCategory>

    <MyCategory title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </MyCategory>

    <MyCategory title="电影">
      <img :src="movie" alt="">
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue'

export default {
  name: 'App',
  components: {MyCategory},
  data() {
    return {
      grill: require('./assets/grill.jpg'), 
      movie: require('./assets/movie.jpg'), 

      foods: ['火锅','烧烤','小龙虾','牛排'],
      games: ['红色警戒','穿越火线','原神','超级玛丽'],
      films: ['教父','拆弹专家','你好李焕英','生化危机']
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