import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
    carts: cartItems,
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        increase: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                if (item.amount > 1) {
                    item.amount -= 1;
                } else {
                    state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
                }
            }
        },
        removeItem: (state, action) => {
            state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
        },
        clearCart: (state) => {
            state.carts = [];
        }
    },
});

export const { increase, decrease, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
