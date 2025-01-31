import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import "../css/Todos.css";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to manage editing
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdateClick = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <div className="todos-container">
        <div className="todos-title">
          <h1>Todos</h1>
        </div>
        {todos.length === 0 ? (
          <p className="empty-message">No tasks available. Add some todos!</p>
        ) : (
          <ul className="todos-list">
            {todos.map((todo) => (
              <li className="todo-item" key={todo.id}>
                {editId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-input"
                    />
                    <button
                      onClick={handleUpdateClick}
                      className="update-button"
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <div className="todo-text">{todo.text}</div>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="remove-button"
                      aria-label={`Remove ${todo.text}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="remove-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleEditClick(todo)}
                      className="edit-button"
                    >
                      Update
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Todos;
