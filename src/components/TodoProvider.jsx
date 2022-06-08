import React, { createContext, useState, useContext } from "react";
const TodoContext = createContext();

const initialValue = ["hello"];
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialValue);
  const getNumberOfTodoItems = todoList.length;

  //add todo
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  //remove todo
  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    todoList,
    getNumberOfTodoItems,
    addTodo,
    removeTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
