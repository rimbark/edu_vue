<script lang="ts" setup>
import MyAddButton from "./components/MyAddButton.vue";
import MyButtonForShow from "./components/MyButtonForShow.vue";
import MyImport from "./components/MyInput.vue";
import MyTodoList from "./components/MyTodoList.vue";
import {computed, ref} from "vue";

let id = 1
let time = new Date().getDay()
const newTodo = ref('')
const todos = ref([{id: id++, addTime: time, todo: 'Первое задание', done: true}])
const hideCompleted = ref(false)
const addTodo = () => {
  todos.value.push({id: id++, addTime: time, todo: newTodo.value, done: false})
  newTodo.value = ''
}
const removeTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
const switchView = () => {
  hideCompleted.value = !hideCompleted.value
}
const filteredTodos = computed(() => {
  return hideCompleted.value
      ? todos.value.filter(t => !t.done)
      : todos.value
})
</script>

<template>
  <h1>todo list:</h1>
  <MyImport v-model="newTodo" />
  <MyAddButton @click="addTodo" />

  <MyTodoList
    :filtered-todos="filteredTodos"
    @click="removeTodo"
  />
  <MyButtonForShow
    :hide-completed="hideCompleted"
    @click="switchView"
  />
</template>

<style scoped>
input {
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
}


</style>
