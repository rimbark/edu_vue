<script setup lang="ts">
import {ref, computed} from "vue";

let id = 1
const newTodo = ref('')
const todos = ref([{id: id++, todo: 'Первое задание', done: true}])
const hideCompleted = ref(false)
const addTodo = () => {
  todos.value.push({id: id++, todo: newTodo.value, done: false})
  newTodo.value = ''
}
const removeTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
const filteredTodos = computed(() => {
  return hideCompleted.value
      ? todos.value.filter(t => !t.done)
      : todos.value
})
</script>

<template>
  <h1>todo list:</h1>
  <input type="text" v-model='newTodo'>
  <button class="addButton" @click='addTodo'>add in todo list</button>
  <ul>
    <template v-for='todo in filteredTodos'>
      <li>
        <button class="deleteButton" @click='removeTodo(todo.id)'>x</button>
        <span :class="{ done: todo.done }">{{ todo.todo }}</span>
        <input type="checkbox" v-model="todo.done">
      </li>
    </template>
  </ul>
  <button @click='hideCompleted = !hideCompleted'>{{ !hideCompleted ? 'Hide completed' : 'Show all' }}</button>
</template>

<style scoped>
input {
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

li {
  font-size: 1.3em;
  list-style: none;
  margin-right: 10px;
}

.addButton {
  margin-left: 10px;
}

.deleteButton {
  display: inline;
  font-size: 1em;
  line-height: 10px;
  width: min-content;
  height: min-content;
}

.done {
  text-decoration: line-through;
}
</style>
