import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useStore } from '../../app/store';
import { selectAddToDo } from './toDosSlice';

export default function AddToDoForm() {
  const [toDo, setToDo] = useState('');

  const addToDo = useStore(selectAddToDo);

  const handleToDoChange = (e) => setToDo(e.target.value);

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (toDo) {
      addToDo({ id: nanoid(), isCompleted: false, text: toDo });
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
        <button onClick={(e) => handleAddToDo(e)} type="submit">
          Add
        </button>
      </form>
    </section>
  );
}
