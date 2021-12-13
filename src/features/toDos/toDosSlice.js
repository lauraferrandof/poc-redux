import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, isCompleted: false, text: 'Workpath onboarding' },
  { id: 2, isCompleted: false, text: 'Finish to-do app' },
];

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.push(action.payload);
    },
    toggleToDo(state, action) {
      const toDoId = action.payload;
      const modifiedToDo = state.find((toDo) => toDo.id === toDoId);
      modifiedToDo.isCompleted = !modifiedToDo.isCompleted;
    },
  },
});

export const { addToDo, toggleToDo } = toDosSlice.actions;

export const selectToDos = (state) => state.toDos;

export default toDosSlice.reducer;
