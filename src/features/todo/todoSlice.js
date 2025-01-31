import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: 1, text: "hello world" }]; // ✅ Change this to an array

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.push(todo); // ✅ Push directly since `state` is an array
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); // ✅ Correct way
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
