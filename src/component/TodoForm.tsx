import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'

const TodoForm = () => {
  const [data, Setdata] = useState();
  
  const SendData = (value: string)  => {
    console.log('Header로부터 받은 데이터', value);
    // Setdata(value);
  }

  return (
    <section className="todoapp">
      {/* TODO: 헤더에서 인풋검색값을 TodoList 로 보내기 */}
      {/* 1. redux는 다음 단계에.. */}
      {/* 2. header 에서 데이터 올리고 TodoForm 에서 다시 데이터 내리기' 는 여기에서 TodoList가 리렌더링이 안됨.. */}
      <Header func={SendData} />
      {SendData}
      <TodoList data={data} /> 
      <Footer />
    </section>
  )
}

export default TodoForm