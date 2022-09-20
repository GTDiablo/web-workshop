import { createSlice } from "@reduxjs/toolkit";
import {THEME} from './ui.constants';

export const UI_FEATURE_KEY = 'ui';

const initialState = {
    theme: THEME.LIGHT
}

const uiSlice = createSlice({
    name: UI_FEATURE_KEY,
    initialState,
    reducers: {
        toggleTheme(state, action){
            if(state.theme === THEME.LIGHT){
                state.theme = THEME.DARK;
            } else {
                state.theme = THEME.LIGHT;
            }
        }
    },
    extraReducers: {}
})

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;