import React from 'react'

// All, Active, Completed / Clear completed / Active 갯수 표기 
const Footer = () => {
  return (
    <footer>
      <span todo-count>1 item left</span>
      <ul className="filters">
        <li className="selected">
          <a href="/#">All</a>
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