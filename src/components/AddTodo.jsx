import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"; // Ensure correct import
import "../css/AddTodo.css";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Ensure input is not empty
      dispatch(addTodo(input)); // Dispatch the action with input value
      setInput(""); // Clear the input field
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="form-container">
      <input
        type="text"
        className="input-field"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input value
      />
      <button type="submit" className="submit-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
