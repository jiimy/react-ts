import React, {useState} from 'react';
import axios from 'axios';
import Router from './Router';

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: 'red'}}>
    //   <ColorBox/>
    // </ColorContext.Provider>
    <div>
      {/* <Counter number={0}/> */}
      {/* <CounterContainer /> */}
      {/* 커밋테스트 */}
      <Router/>
    </div>
  );
};

export default App;