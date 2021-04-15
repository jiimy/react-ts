import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'

const TodoForm = () => {
  return (
    <section className="todoapp">
      <Header />
      <TodoList /> 
      <Footer />
    </section>
  )
}

export default TodoForm