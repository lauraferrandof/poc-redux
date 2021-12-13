import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToDos, toggleToDo } from './toDosSlice';

export default function ToDosList() {
  const toDos = useSelector(selectToDos);
  const dispatch = useDispatch();

  const handleToggleToDo = (id) => {
    dispatch(toggleToDo(id));
  };

  return (
    <section>
      <h2>All my to-dos</h2>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span
              style={{
                textDecoration: toDo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {toDo.text}
            </span>
            <button onClick={() => handleToggleToDo(toDo.id)}>
              {`Mark ${toDo.isCompleted ? 'incompleted' : 'completed'}`}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
