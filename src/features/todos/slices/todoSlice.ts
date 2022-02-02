import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DAO } from '../../../core/DAO'
import { Todo } from '../../../core/Todo'
import { TodoDAO } from '../../../core/TodoDAO'


export interface TodoListState {
    todos: Todo[]
}
const initialState: TodoListState = {todos:[]}

export const getTodosAsync = createAsyncThunk(
    "todos/getTodos",
    async () => {
        const dao:DAO = new TodoDAO()
        const todos = await dao.getAll()
        return todos
    })

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: {
      [getTodosAsync.fulfilled.type]: (state, action) => {
        const r ={
            todos : action.payload
        }

        return r
      }
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = todosSlice.actions

export default todosSlice.reducer