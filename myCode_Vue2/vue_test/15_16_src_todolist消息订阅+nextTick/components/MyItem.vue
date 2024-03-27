<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeStatus(todo.id)"/>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input  ref="inputTitle" v-show="todo.isEdit" type="text" :value="todo.title" @blur="handlerBlur(todo,$event)" />
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    <button v-show="!todo.isEdit"  class="btn btn-edit"  @click="EditItem(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'MyItem',
  props: ['todo'],
  methods:{
    changeStatus(id) {
      // console.log(id);
      // this.changeTodo(id)
      this.$bus.$emit('changeTodo',id)
    },
    deleteItem(id) {
      if(confirm("确认删除吗？")) {
        // console.log(id);
        // this.deleteTodo(id)
      // this.$bus.$emit('deleteTodo',id)
      pubsub.publish('deleteTodo',id)
      }
    },
    //编辑
    EditItem(todo) {
      if(!todo.isEdit){
        this.$set(todo,'isEdit',true)
      } else {
        todo.isEdit = true
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
      // setTimeout(()=>{
      //   this.$refs.inputTitle.focus()
      // },2000)
      // todo.isEdit = true
    },
    handlerBlur(todo,e){
      todo.isEdit = false
      // console.log(e.target.value);
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo',todo.id, e.target.value);
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>