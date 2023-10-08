<script lang="ts" setup>
import {MyTodoListProps} from "./todoList.types.ts";

defineProps<MyTodoListProps>()
defineEmits(['click'])

const changeDateFormat = (date) => {
  const dayNames = [
    'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'
  ]
  console.log(date)
  return dayNames[date]
}
</script>

<template>
  <ul>
    <template
      v-for="todo in filteredTodos"
      :key="todo.id"
    >
      <li>
        <button
          class="deleteButton"
          @click="$emit('click', todo.id)"
        >
          x
        </button>
        <h5>{{ changeDateFormat(todo.addTime) }} - </h5>
        <span :class="{ done: todo.done }">{{ todo.todo }}</span>
        <input
          v-model="todo.done"
          type="checkbox"
        >
      </li>
    </template>
  </ul>
</template>

<style>
h5 {
  display: inline;
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

.deleteButton {
  display: inline;
  margin-right: 10px;
  width: min-content;
  height: min-content;

  font-size: 1em;
  line-height: 10px;
}

.done {
  text-decoration: line-through;
}
</style>