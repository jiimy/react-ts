import React from 'react';

type Props = {
  todo?: any,
  onToggle?: any,
  onRemove?: any
}



const TodoItem = ({todo = 1, onRemove, onToggle}:Props) => {
  return (
    <div>
      <input type="checkbox" name="" id=""/>
      <span>예제 테스트</span>
      <button>삭제</button>
    </div>
  );
};


type TodosProps = {
  input?: any,
  todos?: [],
  onChangeInput?: any,
  onInsert?:any,
  onToggle?:any,
  onRemove?:any,
}
const Todos = ({
  input, todos, onChangeInput, onInsert, onToggle, onRemove,
}: TodosProps) => {
  const onSubmit = (e:any) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input/>
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  )
}



export default Todos;