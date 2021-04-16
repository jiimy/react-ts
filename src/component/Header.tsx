import React, { useState } from 'react'
import useInputState from './useInputState'

type Props = {
  saveTodo: any;
}
// 입력하는 부분
const Header = ({ saveTodo }: Props) => {
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const { value, reset, onChange } = useInputState();

  const Change = (e: any) => {
    setText(e.target.value);
    // console.log(text);
  }

  const KeyPress = (e: any) => {
    if (e.key === 'Enter') {
      setData(text);
      setText('');
      saveTodo(text);
    }
  }

  return (
    <>
      <header className="header">
        <input type="text" onChange={Change} value={text}
          onKeyDown={KeyPress}
          className="new-todo" placeholder="What needs to be done?" />
      </header>
      {/* <TodoList /> */}
    </>
  )
}

export default Header