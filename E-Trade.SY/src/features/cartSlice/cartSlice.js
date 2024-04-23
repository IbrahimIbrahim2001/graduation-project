import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducer: {
        addProduct: (state, action) => {
            this.state = [...state, action.payload];

        }
    }
})