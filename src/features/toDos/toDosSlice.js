import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchToDos } from './toDosAPI';

const initialState = {
  items: [],
  status: 'idle',
};

export const getTodos = createAsyncThunk('toDos/getToDos', async () => {
  const { data } = await fetchToDos();
  return data;
});

export const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.items.push(action.payload);
    },
    toggleToDo(state, action) {
      const toDoId = action.payload;
      const modifiedToDo = state.items.find((toDo) => toDo.id === toDoId);
      modifiedToDo.isCompleted = !modifiedToDo.isCompleted;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload);
      });
  },
});

export const { addToDo, toggleToDo } = toDosSlice.actions;

export const selectToDos = (state) => state.toDos.items;

export default toDosSlice.reducer;
