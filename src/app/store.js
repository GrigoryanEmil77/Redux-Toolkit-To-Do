import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todoReducer from '../features/todolist/todoSlice';
const myMiddleware = [logger]
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },

  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware)
});
