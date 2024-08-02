import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


const initialState = {
    user: [],
    token: undefined,
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
            Cookies.remove('token');
            Cookies.remove('userId');
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
        },
        updateStoreDetails: (state, action) => {
            const someData = action.payload;
            const updatedSeller = {
                ...state.user.seller,
                ...someData,
                //other fields
            };
            state.user.seller = updatedSeller;
        }
    }
})


export const { login, logout, updateUserDetails, updateStoreDetails } = authSlice.actions;
export default authSlice.reducer;