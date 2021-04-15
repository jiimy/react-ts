import React, { useState } from 'react'
import TodoList from './TodoList';


type Props = {
  func? : (value: string) => void;
}
// 입력하는 부분
const Header = ({ func=(value: string) => '' }: Props) => {
  const [text, setText] = useState('');
  const [data, setData] = useState('');

  const Change = (e: any) => {
    setText(e.target.value);
    // console.log(text);
  }

  const KeyPress = (e: any) => {
    if (e.key === 'Enter') {
      console.log('엔터');
      setData(text);
      func(text);
      setText('');

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