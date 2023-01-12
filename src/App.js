import React, { useState } from "react";
import Task from "./Task";
import "./App.css";
import { TodosContext } from "./context/TodosContext";
import TodoForm from "./TodoForm";

function App() {
  const [ todos, setTodo ] = useState([]);
  const [ todoInput, setTodoInput ] = useState("");

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodo,
        todoInput,
        setTodoInput,
      }}
    >
      <TodoForm />
      {todos.length >0 ? <Task /> : ''}
    </TodosContext.Provider>
  );
}

export default App;
