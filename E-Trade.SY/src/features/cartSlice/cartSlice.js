import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    badgeContent: 0,
    bill: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateBadgeContentOnLogIn: (state, action) => {
            const cartItems = action.payload?.order || [];
            let newBadgeContent = 0;
            let newBill = 0;

            cartItems.forEach((item) => {
                const quantity = item.quantity || 0;
                const price = item.product?.price || 0;
                newBadgeContent += quantity;
                newBill += price * quantity;
            });
            state.badgeContent += newBadgeContent;
            state.bill += newBill;
        },
        setBadgeontent: (state, action) => {
            if (action.payload) {
                state.badgeContent++;
            } else {
                state.badgeContent--;
            }
            if (state.badgeContent < 0) state.badgeContent = 0;
            if (state.bill < 0) state.bill = 0;
        },
        deleteCartItemForBadgeContent: (state, action) => {
            const cartItems = action.payload || [];
            state.badgeContent = 0;
            state.bill = 0;
            cartItems.forEach((item) => {
                state.badgeContent += item.quantity;
                state.bill += item.product.price * item.quantity;
            });
        },
        deleteAllCartItemsForBadgeContent: (state) => {
            state.badgeContent = 0;
            state.bill = 0;
        },
        setBill: (state, action) => {
            const { signal, price } = action.payload;
            if (signal)
                state.bill += price;
            else state.bill -= price
        },
    },
});

export const {
    setBadgeontent,
    deleteCartItemForBadgeContent,
    deleteAllCartItemsForBadgeContent,
    updateBadgeContentOnLogIn,
    setBill
} = cartSlice.actions;

export default cartSlice.reducer;
