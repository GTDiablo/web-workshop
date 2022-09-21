import { createSelector } from "@reduxjs/toolkit";
import { BOOK_FEATURE_KEY } from "./books.slice";

const getState = (store) => store[BOOK_FEATURE_KEY];

const getBooks = createSelector(getState, (state) => state.books);
const getBooksIds = createSelector(getState, (state) => state.books.map((book) => book.id));
const getBookById = createSelector([getState, (state, bookId) => bookId], (state, bookId) => state.books.find((book) => book.id === bookId))

export const booksSelectors = {
    getBooks,
    getBooksIds,
    getBookById
}