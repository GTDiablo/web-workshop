import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, BOOK_FEATURE_KEY, booksSelectors } from "./books";

export const store = configureStore({
    reducer : {
        [BOOK_FEATURE_KEY]: booksReducer
    }
});

export {
    booksSelectors
}