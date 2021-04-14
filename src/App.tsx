import React, {useState} from 'react';
import axios from 'axios';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import Router from './Router';

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: 'red'}}>
    //   <ColorBox/>
    // </ColorContext.Provider>
    <div>
      {/* <Counter number={0}/> */}
      {/* <CounterContainer /> */}
      <TodoList/>
      {/* 커밋테스트 */}
      <TodoInsert/>
      <Router/>
    </div>
  );
};

export default App;