import React from 'react'
import TodoItem from './TodoItem'

type Props = {
  data?: (value: string) => void;
}

const TodoList = ({data }:Props) => {
  const Change = (value: string) => {
    console.log(value);
  }
  
  return (
    <section className="main">
      {
        <>
          <input id="toggle-all" className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all" >Mark all as complete</label>
        </>
      }
      <ul className="todo-list">
        <TodoItem data={data}/>
      </ul>
    </section>
  )
}

export default TodoList