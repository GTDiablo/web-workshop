import { createSlice } from "@reduxjs/toolkit";
import { mockTodo1, mockTodo2} from "./todos.mocks";
import { getTodoListFromApi } from "./todos.actions";

export const TODOS_FEATURE_KEY = 'todos';

const defaultTodosState = {
    isLoading: false,
    error: "",
    todos: []
};

export const todosSlice = createSlice({
    name: TODOS_FEATURE_KEY,
    initialState: defaultTodosState,
    reducers: {
        setTodos(state, action){}
    },
    extraReducers: {
        [getTodoListFromApi.fulfilled]: (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        [getTodoListFromApi.pending]: (state) => {
            state.isLoading = true;
        },
        [getTodoListFromApi.rejected]: (state, action) => {
            state.error = action.payload.message;
            state.isLoading = false;
        }
    }
});

export const todosReducer = todosSlice.reducer;
