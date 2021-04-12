import { useState} from 'react';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = (input: HTMLInputElement) => ({
  types: CHANGE_INPUT,
  input
});

const [data, setDate] = useState(3);
let id = 3; // const 써야 하는데 let 말고 usestate로는 안될까...
export const insert = (text: any) => ({
  type:INSERT,
  todo : {
    id: id++,
    text,
    done: false
  }
})

export const toggle = (id:any) => ({
  type: TOGGLE,
  id
});

export const revove = (id:any) => ({
  type: REMOVE,
  id
})