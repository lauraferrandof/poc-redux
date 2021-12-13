import React, { useEffect } from 'react';

// import AddToDoForm from "../features/toDos/AddToDoForm";
import ToDosList from '../features/toDos/ToDosList';

import { useStore } from '../app/store';
import {
  selectAllToDos,
  selectGetToDos,
  selectStatus,
} from '../features/toDos/toDosSlice';

export default function Dashboard() {
  const toDosStatus = useStore(selectStatus);
  const allToDos = useStore(selectAllToDos);

  const getToDos = useStore(selectGetToDos);

  useEffect(() => {
    if (toDosStatus === 'idle') {
      getToDos();
    }
  }, [toDosStatus, getToDos]);

  return (
    <>
      {/* <AddToDoForm /> */}
      <section>
        <h2>All my to-dos</h2>
        {toDosStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <ToDosList toDos={allToDos} />
        )}
      </section>
    </>
  );
}
