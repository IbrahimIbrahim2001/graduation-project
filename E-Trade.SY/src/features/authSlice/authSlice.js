import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    token: null,
}



const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            // const navigate = useNavigate();
            state.user = action.payload;
            state.token = action.payload.token;
            // state.user.result === "Seller" ? navigate('../my-shop') : navigate('../main/shops');

        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;