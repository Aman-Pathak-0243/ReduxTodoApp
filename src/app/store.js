import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer, // ✅ Ensure this matches your `useSelector`
  },
});

export default store;
