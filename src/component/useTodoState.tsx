import { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue:any) => {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos, 
    addTodo: (todoText:any) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex: any) => {
      console.log('todoindex', todoIndex);

      setTodos([...todos, todoIndex]);
      console.log('todos', todos);

      const newTodos = todos.filter((_: any, index: any) => index !== todoIndex);

      setTodos(newTodos);
    }
  }
}