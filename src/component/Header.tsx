import React, {useState} from 'react'
import TodoList from './TodoList';

// 입력하는 부분
const Header = () => {
  const Change = (event: string) => {
    console.log(event);

  }
  return (
    <header className="header">
      <input type="text" onChange={event => Change} className="new-todo"/>
      <TodoList/>
    </header>
  )
}

export default Header