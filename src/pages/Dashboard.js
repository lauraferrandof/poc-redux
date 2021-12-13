import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddToDoForm from '../features/toDos/AddToDoForm';
import ToDosList from '../features/toDos/ToDosList';

import { getTodos, selectAllToDos } from '../features/toDos/toDosSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const toDosStatus = useSelector((state) => state.toDos.status);
  const allToDos = useSelector(selectAllToDos);

  useEffect(() => {
    if (toDosStatus === 'idle') {
      dispatch(getTodos());
    }
  }, [toDosStatus, dispatch]);

  return (
    <>
      <AddToDoForm />
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
