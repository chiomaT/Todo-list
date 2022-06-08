import React from "react";
import { useTodoContext } from "../components/TodoProvider";
import "./todolist.css"

const TodoList = () => {
  const { todoList, removeTodo } = useTodoContext();
  return (
      <div className = "todo-content">
    <ul className="list">
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}

          <button className="remove-btn" onClick={() => removeTodo(index)}>x</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
