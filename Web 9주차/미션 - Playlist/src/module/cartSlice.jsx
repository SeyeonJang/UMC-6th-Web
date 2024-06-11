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
            console.log('increase item : ', item);
            console.log('action: ',action);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                item.amount -= 1;
            }
        },
    },
});

export const { increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
