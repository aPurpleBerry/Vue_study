<template>
  <div class="container">
    <GiSearch></GiSearch>
    <GiList></GiList>
  </div>
</template>

<script>
import GiList from './components/GiList.vue'
import GiSearch from './components/GiSearch.vue'

export default {
  name: 'App',
  components: {GiSearch,GiList},
  methods: {
  }
}
</script>
