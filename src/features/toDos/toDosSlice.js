import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Workpath onboarding' },
  { id: 2, text: 'Finish to-do app' },
];

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {},
});

export const selectToDos = (state) => state.toDos;

export default toDosSlice.reducer;
