import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'

const TodoForm = () => {
  return (
    <section className="todoapp">
      {/* TODO: 헤더에서 인풋검색값을 TodoList 로 보내기 */}
      {/* 1. redux는 다음 단계에.. */}
      {/* 2. header 에서 데이터 올리고 TodoForm 에서 다시 데이터 내리기 */}
      <Header />
      <TodoList /> 
      <Footer />
    </section>
  )
}

export default TodoForm