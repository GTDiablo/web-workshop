import { createSlice } from "@reduxjs/toolkit";
//
import { book1, book2, book3 } from "./books.mocks";

export const BOOK_FEATURE_KEY = 'books';

const initialState = {
    books: [book1, book2, book3],
    isLoading: false,
    error: '',
};

export const booksSlice = createSlice({
    name: BOOK_FEATURE_KEY,
    initialState,
    reducers: {
        addNewBook(state, action) {
            state.books.push(action.payload);
        }
    },
    extraReducers: {}
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;