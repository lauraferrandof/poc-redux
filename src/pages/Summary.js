import React from 'react';
import { useSelector } from 'react-redux';

import ToDosList from '../features/toDos/ToDosList';
import { selectToDosByCompletion } from '../features/toDos/toDosSlice';

export default function Summary() {
  const completedToDos = useSelector((state) =>
    selectToDosByCompletion(state, true)
  );
  const incompletedToDos = useSelector((state) =>
    selectToDosByCompletion(state, false)
  );

  return (
    <>
      <section>
        <h2>Done ✅</h2>
        <ToDosList toDos={completedToDos} />
      </section>
      <section>
        <h2>Pending ⏳</h2>
        <ToDosList toDos={incompletedToDos} />
      </section>
    </>
  );
}
