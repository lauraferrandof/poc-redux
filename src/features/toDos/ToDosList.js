import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleToDo } from './toDosSlice';

export default function ToDosList({ toDos }) {
  const dispatch = useDispatch();

  const handleToggleToDo = (id) => {
    dispatch(toggleToDo(id));
  };

  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <article>
            <p
              style={{
                textDecoration: toDo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {toDo.text}
            </p>
            <button onClick={() => handleToggleToDo(toDo.id)}>
              {`Mark ${toDo.isCompleted ? 'incompleted' : 'completed'}`}
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
}
