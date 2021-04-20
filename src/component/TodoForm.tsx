import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'
import useTodoState from './useTodoState'

const TodoForm = () => {
  const [data, Setdata] = useState();
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <section className="todoapp">
      {/* TODO: 헤더에서 인풋검색값을 TodoList 로 보내기 */}
      {/* 1. redux는 다음 단계에.. */}
      <Header
        saveTodo={
          (todoText: any) => {
            if (todoText.length > 0) {
              addTodo(todoText)
            }
          }
        }
      />
      {todos}
      <TodoList data={todos} deleteTodo={
        (index: any) => {
          deleteTodo(index)
        }
      }
      />
      <Footer data={todos}/>
    </section>
  )
}

export default TodoForm