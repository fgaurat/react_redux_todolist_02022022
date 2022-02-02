import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DAO } from '../../../core/DAO'
import { TodoDAO } from '../../../core/TodoDAO'


const getTodosAsync = createAsyncThunk(
    "todos/getTodos",
    async () => {
        const dao:DAO = new TodoDAO()
        const todos = await dao.getAll()
        return todos
    })

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = todosSlice.actions

export default todosSlice.reducer