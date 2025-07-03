import React, { useState, useRef, useEffect } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Focus input field on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add task handler
  const handleAdd = () => {
    const trimmed = task.trim();
    if (trimmed === "") return;

    // Avoid duplicate entries
    if (todos.includes(trimmed)) {
      alert("Task already exists!");
      return;
    }

    const updatedTodos = [...todos, trimmed].sort((a, b) =>
      a.localeCompare(b)
    );
    setTodos(updatedTodos);
    setTask(""); // Clear input
    inputRef.current.focus(); // Focus again
  };

  // Delete task handler
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
