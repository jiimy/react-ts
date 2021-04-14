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
  // TODO: ⓑ: 로컬스토리지에 저장을 했다면 가져올때 로컬스토리지걸 먼저 가져오고 그 뒤에 addTodo 해야되고, 
  // 로컬스토리지는 키:밸류기 때문에 키값들을 조회해서 가져오게하기
  todoData: [],
  currentId: 0,
  addTodo(content) {  
    const index = 1;
    console.log('t', content);
    this.todoData.push({ id: this.currentId, content, checked: false});
    this.currentId++;

    // TODO: ⓐ: 저장을 할수있는데 리스트에 뿌려줄때 
    localStorage.setItem(`item${index}`, JSON.stringify({ id: this.currentId, content, checked: false })); // 로컬스토리지로 저장 시도..
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((v) => v.id === id);
    if (id !== -1) {
      this.todoData.splice(index, 1);
    }
  }
})
