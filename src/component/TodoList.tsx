import React, { useState } from 'react'
import classnames from 'classnames';

type Props = {
  data?: any;
  deleteTodo: any;
}

const TodoList = ({ data, deleteTodo }: Props) => {
  const [check, setCheck] = useState({
    initailState : false,
    index : 0
  });
  const [checked, setChecked] = React.useState(true);
  const Click = (index:any) => {
    deleteTodo(index);
  }

  const checkEvent = (checked: any, index:any) => {
    // setCheck(!check);
    console.log(checked);
    console.log('index', index);
    setCheck({
      ...check,
      initailState: checked,
      index: index
    })
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
              // TODO: 클릭시에 취소선 표기, completed 로 구분
              // <li key={index} className={classnames("", )}>
                <li key={index} className={classnames("", (check.initailState === true ) && 'completed')}>
                <div className="view" >
                  {/* TODO : check 상태 */}
                  <input className="toggle" type="checkbox" onChange={(event) => checkEvent(event.target.checked, index)}/>
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