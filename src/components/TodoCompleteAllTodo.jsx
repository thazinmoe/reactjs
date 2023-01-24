import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoCompleteAllTodos() {
  const { todos, setTodo } = useContext(TodosContext);

  function completeAllTodos() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;

      return todo;
    });
    setTodo(updatedTodos);
  }

  function uncompleteAllTodos() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = false;

      return todo;
    });
    setTodo(updatedTodos);
  }

  return (
    <div>
      <div onClick={completeAllTodos} className="button">
        Check All
      </div>
      <div onClick={uncompleteAllTodos} className="button">
        UnCheck All
      </div>
    </div>
  );
}

export default TodoCompleteAllTodos;
