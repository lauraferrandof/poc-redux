import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addToDo } from './toDosSlice';

export default function AddToDoForm() {
  const [toDo, setToDo] = useState('');
  const dispatch = useDispatch();

  const handleToDoChange = (e) => setToDo(e.target.value);

  const handleAddToDo = () => {
    if (toDo) {
      dispatch(addToDo({ id: nanoid(), text: toDo }));
      setToDo('');
    }
  };

  return (
    <section>
      <h2>Add to-do</h2>
      <form>
        <label htmlFor="toDo">New to-do</label>
        <input
          id="toDo"
          name="toDo"
          onChange={handleToDoChange}
          type="text"
          value={toDo}
        />
        <button onClick={handleAddToDo} type="button">
          Add
        </button>
      </form>
    </section>
  );
}
