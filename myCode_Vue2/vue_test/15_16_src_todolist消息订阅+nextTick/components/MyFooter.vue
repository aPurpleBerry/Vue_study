<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @click ="checkAll"/>
      <!-- <input type="checkbox" :checked="doneTotal === total"/> -->
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      const x = this.todos.reduce((pre,current)=>{
        return pre+(current.done?1:0)
      },0)
      return x
    },
    isAll() {
      return this.total === this.doneTotal && this.total > 0
    }   
  },
  methods:{
    checkAll(e) {
      console.log(e.target.checked);
      // 这里要去APP.vue中修改值
      // 因为值存在App中
      // this.checkAllTodo(e.target.checked)
      this.$emit('checkAllTodo',e.target.checked)
    },
    clearAll(){
      // this.clearAllTodo()
      this.$emit('clearAllTodo')

    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>