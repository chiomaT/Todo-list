import React, { useState } from "react";
import { useTodoContext } from "../components/TodoProvider";
import "./todolist.css"

const TodoForm = () => {
  const { getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoItem) {
      return;
    }
    addTodo(todoItem);
    setTodoItem("");

    console.log("new todo =", todoItem);
  };
  return (
    <div className="form-container">
      <h2>Number of todos: {getNumberOfTodoItems}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        ></input>
        <button className="btn"type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
