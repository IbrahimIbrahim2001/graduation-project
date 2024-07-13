import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const initialState = {
    user: null,
    token: null,
}



const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;

        },
        logout: (state) => {
            localStorage.clear();
            Cookies.remove('token');
            Cookies.remove('userId');
            state.user = null;
            state.token = null;
        },
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;