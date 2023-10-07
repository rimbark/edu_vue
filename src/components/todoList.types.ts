export type MyTodoListProps = {
  filteredTodos: MyTodo[]
}

export type MyTodo = {
  id: number
  addTime: Date
  todo: string
  done: boolean
}