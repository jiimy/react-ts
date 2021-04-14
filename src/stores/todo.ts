import { observable } from 'mobx';

// todoData 타입
export type TodoData = {
  id: number;
  content: string;
  checked: boolean;
}

type Todo = {
  todoData: TodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

export const todo = observable<Todo>({
  todoData: [],
  currentId: 0,
  addTodo(content) {  //
    const index = 1;
    console.log('t', content);
    this.todoData.push({ id: this.currentId, content, checked: false});
    this.currentId++;

    localStorage.setItem(`item${index}`, JSON.stringify({ id: this.currentId, content, checked: false })); // 로컬스토리지로 저장 시도..
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((v) => v.id === id);
    if (id !== -1) {
      this.todoData.splice(index, 1);
    }
  }
})

const storage = localStorage.setItem('item', JSON.stringify({a: 1, b: 2}));