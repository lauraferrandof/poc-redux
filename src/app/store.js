import { configureStore } from '@reduxjs/toolkit';

import toDosReducer from '../features/toDos/toDosSlice';

export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});
