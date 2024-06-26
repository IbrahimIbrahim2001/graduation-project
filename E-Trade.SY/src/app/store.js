import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import searchSlice from "../features/searchSlice/searchSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        search: searchSlice,
    }
})