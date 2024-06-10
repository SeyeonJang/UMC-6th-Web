import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    // reducers: {
    //     addTodos: (state, action) => {
    //     state.todos.push({ text: action.payload, done: false });
    //     },
    //     removeTodos: (state, action) => {
    //     state.todos.splice(action.payload, 1);
    //     },
    //     toggleTodos: (state, action) => {
    //     state.todos[action.payload].done = !state.todos[action.payload].done;
    //     },
    // },
});

export const { addTodos, removeTodos, toggleTodos } = cartSlice.actions;
export default cartSlice.reducer;   