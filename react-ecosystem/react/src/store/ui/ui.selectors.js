import { createSelector } from "@reduxjs/toolkit";
import { UI_FEATURE_KEY } from "./ui.slice";

const getState = (store) => store[UI_FEATURE_KEY];
const getNavbarState = (store) => getState(store).navbar;

const getIsNavbarOpen = createSelector(getNavbarState, (state) => state.isOpen);
const getNavbarItems = createSelector(getNavbarState, (state) => state.items);
const getLanguages = createSelector(getState, (state) => state.langs);

export const uiSelectors = {
    getIsNavbarOpen,
    getNavbarItems,
    getLanguages
}