import { createAsyncThunk } from "@reduxjs/toolkit";
// import { todosSlice } from "./todos.slice";
import { API_URL } from "./todos.constants";
import axios from "axios";

export const getTodoListFromApi = createAsyncThunk(
    'todos/getTodosListFromApi',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(API_URL);
            console.log('FROM API:', response);

            return response.data;
        } catch(error) {
            thunkApi.rejectWithValue({
                message: 'Hiba van',
                error
            })
        }
    }
);

// const todosSliceActions = todosSlice.actions;

export const todoActions = {
    // ...todosSliceActions,
    getTodoListFromApi
}