import create from 'zustand';

import createToDosSlice from '../features/toDos/toDosSlice';

export const useStore = create((set) => ({
  ...createToDosSlice(set),
}));
