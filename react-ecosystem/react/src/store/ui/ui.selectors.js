import { createSelector } from "@reduxjs/toolkit";
import { UI_FEATURE_KEY } from "./ui.slice";
import {THEME} from './ui.constants'
import { DarkTheme, LightTheme } from "../../components/GlobalStyles";

const getUiState = (storeState) => storeState[UI_FEATURE_KEY];

export const getTheme = createSelector(getUiState, (state)=> {
    switch(state.theme){
        case THEME.LIGHT:
            return LightTheme;
        case THEME.DARK:
            return DarkTheme;
    }
});

export const getThemeName = createSelector(getUiState, (state) => state.theme);