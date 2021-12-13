import React from 'react';
import { useSelector } from 'react-redux';

import { selectToDos } from './toDosSlice';

export default function ToDosList() {
  const toDos = useSelector(selectToDos);

  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.text}</li>
      ))}
    </ul>
  );
}
