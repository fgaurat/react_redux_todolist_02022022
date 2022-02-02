import { configureStore } from '@reduxjs/toolkit'
import todoListReducers from '../features/todos/slices/todoSlice'

export const store =  configureStore({
  reducer: {
    todoList:todoListReducers
  }
})

export type RootState = ReturnType<typeof store.getState>