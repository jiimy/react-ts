import React, { useState } from 'react'
import classnames from 'classnames';

type Props = {
  data?: any;
  deleteTodo: any;
}

const TodoList = ({ data, deleteTodo }: Props) => {
  const [check, setCheck] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const Click = (index:any) => {
    deleteTodo(index);
  }

  const checkEvent = (checked: any) => {
    setCheck(!check);
    console.log('aa');
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
              <li key={index} className={classnames("", check === true && 'completed')}>
                <div className="view" >
                  {/* TODO : check 상태 */}
                  <input className="toggle" type="checkbox" onChange={(event) => checkEvent(event.target.checked)}/>
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