import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DAO } from '../../../core/DAO'
import { Todo, TodoInfo } from '../../../core/Todo'
import { TodoDAO } from '../../../core/TodoDAO'


export interface TodoListState {
    todos: Todo[]
}
const initialState: TodoListState = { todos: [] }



export const getTodosAsync = createAsyncThunk(
    "todos/getTodos",
    async () => {
        const dao: DAO = new TodoDAO()
        const todos = await dao.getAll()
        return todos
    })

export const deleteTodoAsync = createAsyncThunk(
    "todos/deleteTodo",
    async (id: number) => {
        const dao: DAO = new TodoDAO()
        dao.delete(id)
        return { id }
    }
)


export const saveTodoAsync = createAsyncThunk(
    "todos/saveTodo",
    async (payload:TodoInfo) =>{
        const dao: DAO = new TodoDAO()
        const todo = await dao.save(payload)
        return { todo }
    }
)

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getTodosAsync.fulfilled.type]: (state, action) => {
            const r = {
                todos: action.payload
            }
            return r
        },
        [deleteTodoAsync.fulfilled.type]: (state, action) => {
            const r = {
                todos: state.todos.filter(t => t.id !== action.payload.id)
            }
            return r
        },
        [saveTodoAsync.fulfilled.type]: (state, action) => {
            const r = {
                todos: [action.payload.todo,...state.todos]
            }
            return r
        }
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = todosSlice.actions

export default todosSlice.reducer