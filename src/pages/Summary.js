import React from 'react';

import { useStore } from '../app/store';
import ToDosList from '../features/toDos/ToDosList';
import { selectToDosByCompletion } from '../features/toDos/toDosSlice';

export default function Summary() {
  const completedToDos = useStore((state) =>
    selectToDosByCompletion(state, true)
  );
  const incompletedToDos = useStore((state) =>
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
