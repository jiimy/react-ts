import { observable } from 'mobx';

export type TodoData = {
  id: number;
  content: string;
  checked: boolean;
}

interface Todo {
  todoData: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<Todo>({
  todoData: [],
  currentId: 0,

  addTodo(content) {
    console.log('t', content);
    this.todoData.push({ id: this.currentId, content, checked: false});
    this.currentId++;
    console.log('data', this.todoData[0]["content"])
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((v) => v.id === id);
    if (id !== -1) {
      this.todoData.splice(index, 1);
    }
  }
})
