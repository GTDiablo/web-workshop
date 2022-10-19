import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

export const AUTH_FEATHER_KEY = 'auth';
const USER_DATA = {
    username: 'admin',
    password: 'Password123'
}

const initialState = {
    user: null,
    error: '',
}

const AuthAction = Object.freeze({
    LOGIN_USER : 'auth/loginUser',
    LOGOUT_USER: 'auth/logoutUser'
});

// userLoginData = username + password
const loginUser = createAsyncThunk(AuthAction.LOGIN_USER, async (userLoginData, thunkApi) => {
    const {username, password} = userLoginData;
    if(USER_DATA.username === username && USER_DATA.password === password){
        thunkApi.dispatch(authAction.setUser(USER_DATA));
        thunkApi.dispatch(authAction.setError(''));
    } else {
        thunkApi.dispatch(authAction.setUser(null));
        thunkApi.dispatch(authAction.setError('Wrong password or username!'));
    }
});

const logoutUser = createAsyncThunk(AuthAction.LOGOUT_USER, async (_, thunkApi) => {
        thunkApi.dispatch(authAction.setUser(null));
        thunkApi.dispatch(authAction.setError(''));
});

const authSlice = createSlice({
    name: AUTH_FEATHER_KEY,
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export const authAction = {
    ...authSlice.actions,
    loginUser,
    logoutUser
};
export const authReducer = authSlice.reducer;

// selectors
const getAuthState = (store) => store[AUTH_FEATHER_KEY];
const getIsUserLoggedIn = createSelector(getAuthState, (state) => !!state.user);
const getUserName = createSelector(getAuthState, (state) => state.user ? state.user.username : 'Unknown');

export const authSelectors = {
    getIsUserLoggedIn,
    getUserName
}