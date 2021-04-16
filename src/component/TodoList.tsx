import React from 'react'
import TodoItem from './TodoItem'
import useTodoState from './useTodoState'

type Props = {
  data?: any;
  deleteTodo: any;
}

const TodoList = ({ data, deleteTodo }: Props) => {
  const Click = (index:any) => {
    deleteTodo(index);

  }

  return (
    <section className="main">
      {
        <>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all" >Mark all as complete</label>
        </>
      }
      <ul className="todo-list">
        {data &&
          data.map((item: any, index: any) => {
            return (
              <li key={index} className="completed">
                <div className="view" >
                  <input className="toggle" type="checkbox" />
                  <label> {data[index]} </label>
                  <button className="destroy" onClick={() => Click(index)}></button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default TodoList