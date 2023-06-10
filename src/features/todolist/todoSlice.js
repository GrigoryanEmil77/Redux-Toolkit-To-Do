import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const url = "http://localhost:5000/todos"
const initialState = {
    value: [],
    status: false,
};

export const getTodos = createAsyncThunk(
    "todos/getTodo",
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get(url)
            return result.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (title, { rejectWithValue }) => {
        try {
            const result = await axios.post(url, {
                title,
                checked: false
            })
            return result.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const checkTodo = createAsyncThunk(
    "todos/checkTodo",
    async ([id, checked], { rejectWithValue }) => {
        console.log(id);
        console.log(checked);

        try {
            const result = await axios.patch(url + '/' + id, {
                checked
            })
            return result.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id, { rejectWithValue }) => {
        try {
            const result = await axios.delete(url + '/' + id)
            return id
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)



export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            state.status = true
        },
        [getTodos.fulfilled]: (state, action) => {
            state.value = action.payload
            state.status = false
        },
        [getTodos.rejected]: (state, action) => {
            alert(action.error.message);
            state.status = false
        },
        [addTodo.pending]: (state, action) => {
            state.status = true
        },
        [addTodo.fulfilled]: (state, action) => {
            state.value.push(action.payload)
            state.status = false
        },
        [addTodo.rejected]: (state, action) => {
            alert(action.error.message);
            state.status = false
        },
        [deleteTodo.pending]: (state, action) => {
            state.status = true
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload)
            state.status = false
        },
        [deleteTodo.rejected]: (state, action) => {
            alert(action.error.message);
            state.status = false
        },
        [checkTodo.pending]: (state, action) => {
            state.status = true
        },
        [checkTodo.fulfilled]: (state, action) => {
            state.value.find(todo => todo.id === action.payload.id).checked = action.payload.checked
            state.status = false
        },
        [checkTodo.rejected]: (state, action) => {
            alert(action.error.message);
            state.status = false
        }
    }
})


export const selectTodo = (state) => state.todos.value;


export default todoSlice.reducer;
