import { createSelector } from "@reduxjs/toolkit";
import { TODOS_FEATURE_KEY } from "./todos.slice";

const getTodoState = (store) => store[TODOS_FEATURE_KEY];

const getTodoList = createSelector(getTodoState, (state)=> state.todos);
const getTodoListIsLoading = createSelector(getTodoState, (state)=> state.isLoading);

export const todosSelectors = {
    getTodoList,
    getTodoListIsLoading
}