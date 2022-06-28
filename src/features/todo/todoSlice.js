import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "TODOLIST 만들기",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    insert: (state, payload) => {
      state.todos.concat({
        id: payload.id,
        text: payload.text,
        isCompleted: false,
      });
    },
    remove: (state, payload) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    update: (state, payload) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
    },
    toggle: (state, payload) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const { insert, remove, update, toggle } = todoSlice.actions;

export default todoSlice.reducer;
