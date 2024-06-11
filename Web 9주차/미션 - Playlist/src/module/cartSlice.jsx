import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        increase: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                item.quantity -= 1;
            }
        },
    },
});

export const { addTodos, removeTodos, toggleTodos } = cartSlice.actions;
export default cartSlice.reducer;   