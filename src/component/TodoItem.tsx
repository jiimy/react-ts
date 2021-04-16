import React, { useState, useEffect } from 'react'
import useInputState from './useInputState'
import useTodoState from './useTodoState'

type Props = {
  data?: any
}

const TodoItem = ({ data }: Props) => {
  const [theArray, setTheArray] = useState(['']);
  const { value, reset, onChange } = useInputState();
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  useEffect(() => {
    console.log('받은 데이터', data)
  }, [data])

  return (
    <>
      {data &&
        data.map((item: any, index: any) => {
          return (
            <li key={index}>
              <div className="view" >
                <input className="toggle" type="checkbox" />
                <label> {data[index]} </label>
                <button className="destroy" onClick={() => deleteTodo(index)}></button>
              </div>
            </li>
          )
        })
      }
    </>
  )
}

export default TodoItem