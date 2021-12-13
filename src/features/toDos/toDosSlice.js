import { fetchToDos } from './toDosAPI';

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
