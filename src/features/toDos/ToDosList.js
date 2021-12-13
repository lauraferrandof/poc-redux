import React from 'react';
import PropTypes from 'prop-types';

import { useStore } from '../../app/store';
import { selectToggleToDo } from './toDosSlice';

export default function ToDosList({ toDos }) {
  const toggleToDo = useStore(selectToggleToDo);

  const handleToggleToDo = (id) => {
    toggleToDo(id);
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

ToDosList.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isCompleted: PropTypes.bool,
      text: PropTypes.string,
    })
  ).isRequired,
};
