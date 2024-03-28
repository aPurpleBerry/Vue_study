<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}} </h1>
		<!-- <h1>当前求和为：{{sum}}</h1> -->

		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
  
	export default {
		name:'MyCount',
		data() {
			return {
				n:1, //用户选择的数字
        // ************************************************************
        // 步骤一 为了演示vuex，把本例中的 sum 放去了 /src/store/index.js
				// sum:0 当前的和
			}
		},
		methods: {
			increment(){
        this.$store.dispatch('jia', this.n)
        // ************************************************************
        // 步骤二 dispatch
        // （步骤三 去/src/store/index.js中让 actions 里面配置好函数）
				// this.sum += this.n
			},
			decrement(){
        this.$store.commit('JIAN', this.n)
				// this.sum -= this.n
			},
			incrementOdd(){
        this.$store.dispatch('jiaOdd', this.n)
				// if(this.sum % 2){
				// 	this.sum += this.n
				// }
			},
			incrementWait(){
        this.$store.dispatch('jiaWait', this.n)
				// setTimeout(()=>{
				// 	// this.sum += this.n
				// },500)
			},
		},
    watch: {
      n(value) {
        console.log(value);
      }
    }
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
