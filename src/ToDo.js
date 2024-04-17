import React, { useState } from "react";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
    }
    setInputValue("");
  };

  const handleTodoDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputValue} />
      <button onClick={handleTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => handleTodoDelete(i)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
