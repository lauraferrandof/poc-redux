import React from 'react';

import AddToDoForm from '../features/toDos/AddToDoForm';
import ToDosList from '../features/toDos/ToDosList';

export default function Dashboard() {
  return (
    <>
      <AddToDoForm />
      <ToDosList />
    </>
  );
}
