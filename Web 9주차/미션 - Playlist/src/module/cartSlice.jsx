import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        
    },
});

export const { addTodos, removeTodos, toggleTodos } = cartSlice.actions;
export default cartSlice.reducer;   