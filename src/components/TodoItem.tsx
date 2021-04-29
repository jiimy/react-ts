import React from 'react';
import styles from './TodoItem.module.scss';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
      <div className={styles.TodoItem__text}>asdfasdf</div>
      {
        console.log('styles', styles)
      }
    </li>
  );
}

export default TodoItem;