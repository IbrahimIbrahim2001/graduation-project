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
            Cookies.remove('token', { path: '' });
            Cookies.remove('userId', { path: '/' });
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
        updateUserDetails: (state, action) => {
            const { phoneNumber: telephone, lastName: second_name, address, firstName: first_name } = action.payload;
            const updatedUser = {
                ...state.user.customer,
                telephone,
                second_name,
                address,
                first_name
            };
            state.user.customer = updatedUser;
            console.log(state.user.customer);
        }
    }
})


export const { login, logout, updateUserDetails } = authSlice.actions;
export default authSlice.reducer;