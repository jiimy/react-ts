import { observable } from 'mobx';

export type TodoData = {
  id: number;
  content: string;
  checked: boolean;
}

interface Todo {
  todoData: TodoData[];
  data: [];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<Todo>({
  todoData: [],
  currentId: 0,
  data: [],

  addTodo(content) {
    console.log('t', content);
    this.todoData.push({ id: this.currentId, content, checked: false});
    this.currentId++;
    console.log( typeof this.data);
    console.log('data', this.todoData);
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((v) => v.id === id);
    if (id !== -1) {
      this.todoData.splice(index, 1);
    }
  }
})
