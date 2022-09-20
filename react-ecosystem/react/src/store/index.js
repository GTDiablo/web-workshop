import { TODOS_FEATURE_KEY, todosReducer } from "./todos";
import { UI_FEATURE_KEY, uiReducer } from "./ui/ui.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        [TODOS_FEATURE_KEY]: todosReducer,
        [UI_FEATURE_KEY]: uiReducer,
    }
})


export * from './todos';