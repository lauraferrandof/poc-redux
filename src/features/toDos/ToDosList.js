import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos, selectToDos, toggleToDo } from './toDosSlice';

export default function ToDosList() {
  const dispatch = useDispatch();
  const toDos = useSelector(selectToDos);
  const toDosStatus = useSelector((state) => state.toDos.status);

  useEffect(() => {
    if (toDosStatus === 'idle') {
      dispatch(getTodos());
    }
  }, [toDosStatus, dispatch]);

  const handleToggleToDo = (id) => {
    dispatch(toggleToDo(id));
  };

  return (
    <section>
      <h2>All my to-dos</h2>
      {toDosStatus === 'loading' ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </section>
  );
}
