import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'

const TodoForm = () => {
  return (
    <section className="todoapp">
      {/* TODO: 헤더에서 인풋검색값을 TodoList 로 보내기 */}
      <Header />
      <TodoList /> 
      <Footer />
    </section>
  )
}

export default TodoForm