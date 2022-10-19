import { configureStore } from "@reduxjs/toolkit";
import { booksReducer, BOOK_FEATURE_KEY } from "./books";
import { uiReducer, UI_FEATURE_KEY } from "./ui";
import {authReducer, AUTH_FEATHER_KEY} from './auth'

export const store = configureStore({
    reducer : {
        [BOOK_FEATURE_KEY]: booksReducer,
        [UI_FEATURE_KEY]: uiReducer,
        [AUTH_FEATHER_KEY]: authReducer
    }
});


export {uiActions, uiSelectors, LightTheme, LANGUAGES} from './ui';
export {booksActions, booksSelectors} from './books';
export {authAction, authSelectors} from './auth'