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
      .addCase(getTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload);
      });
  },
});

export const { addToDo, toggleToDo } = toDosSlice.actions;

export const createToDosSlice = (set) => ({
  toDos: [],
  status: 'idle',
  getToDos: async () => {
    set({ status: 'loading' });
    const { data } = await fetchToDos();
    set({ toDos: data });
    set({ status: 'succeeded' });
  },
  addToDo: (toDo) =>
    set((state) => ({
      toDos: [...state.toDos, toDo],
    })),
  toggleToDo: (todoId) =>
    set((state) => ({
      toDos: [
        ...state.toDos.map((toDo) =>
          toDo.id === todoId
            ? { ...toDo, isCompleted: !toDo.isCompleted }
            : toDo
        ),
      ],
    })),
});

export const selectAllToDos = (state) => state.toDos;

export const selectToDosByCompletion = (state, completed) =>
  state.toDos.filter((item) => item.isCompleted === completed);

export const selectStatus = (state) => state.status;

export const selectGetToDos = (state) => state.getToDos;

export const selectAddToDo = (state) => state.addToDo;

export const selectToggleToDo = (state) => state.toggleToDo;

export default createToDosSlice;
