import React from 'react'

type Props = {
  data? : [];
}

const TodoItem = ({data}:Props) => {
  return (
    <ul>
      <li>
      <div className="view" >
        <input className="toggle" type="checkbox" />
        <label >123</label>
        <button className="destroy" ></button>
      </div>
      </li>
    </ul>
  )
}

export default TodoItem