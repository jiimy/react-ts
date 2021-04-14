import React from 'react'
import useStore from '../useStore';
import { TodoData } from '../stores/todo';

type Props = {
  data: TodoData;
}

const TodoItem = ({data} : Props ) => {
  const { todo} = useStore(); // 스토어 중에 todo가져옴

  const removeItem = () => {
    todo.removeTodo(data.id);
  }

  return (
    <div>

      <input type="checkbox"/>
      <span>{data.content}</span>
      <span onClick={removeItem} style={{ cursor: 'pointer', padding: '4px'}}>X</span>
    </div>
  )
}

export default TodoItem