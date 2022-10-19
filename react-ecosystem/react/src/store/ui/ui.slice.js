import { createSlice } from "@reduxjs/toolkit";
import i18n from '../../i18n'

export const UI_FEATURE_KEY = 'ui';

const initialState = {
    navbar: {
        isOpen: true,
        items: [
            {
                title: i18n.t('navbar.home'),
                path: '/'
            },
            {
                title: i18n.t('navbar.bookList'),
                path: '/books/list'
            },
            {
                title: i18n.t('navbar.createNewBook'),
                path: '/books/new'
            }
        ]
    },
    langs: [
        {
            value: 'hu',
            name: i18n.t('ui.langs.hu')
        },
        {
            value: 'en',
            name: i18n.t('ui.langs.en')
        }
    ]
}

const uiSlice = createSlice({
    name: UI_FEATURE_KEY,
    initialState,
    reducers: {
        toggleNavbar(state) {
            state.navbar.isOpen = !state.navbar.isOpen;
        }
    },
    extraReducers: {}
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;