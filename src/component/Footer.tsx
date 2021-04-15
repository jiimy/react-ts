import React from 'react'

// All, Active, Completed / Clear completed / Active 갯수 표기 
const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
      <strong>1</strong>
      <span>item</span>
      <span> left</span>
    </span>
      <ul className="filters">
        <li className="selected">
          <a href="/#" className="selected">All</a>
        </li>
        <li className="">
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer