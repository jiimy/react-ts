import React from 'react'
import { useObserver } from 'mobx-react-lite';

import useStore from '../useStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todo: {todoData}, } = useStore();
  
  return useObserver(() => (
    <div>
      'TodoList'
      { todoData}
      {/* {todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))} */}
    </div>
  ));
}

export default TodoList