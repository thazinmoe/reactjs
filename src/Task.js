import React, { useContext } from "react";
import { TodosContext } from "./context/TodosContext";
// import "./App.css";
import TodoItemsRemaining from "./components/TodoItemsRemaining";
import TodoCompleteAllTodos from './components/TodoCompleteAllTodo';

export const Task = () => {
  const { todos, setTodo } = useContext(TodosContext);

  function completeTodo(id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodo(updateTodos);
  }

  function markAsEditing(id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodo(updateTodos);
  }

  function updateTodo(event, id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodo(updateTodos);
  }

  function cancelTodo(event, id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodo(updateTodos);
  }

  function deleteTodo(id) {
    setTodo([...todos].filter((todo) => todo.id !== id));
    console.log("delete", id);
  }
  return (
    <>
      <ul className="pul">
        {todos.map((todo, i) => {
          return (
            <li key={i} className="tli">
              <input
                type="checkbox"
                onChange={() => completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              />

              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => markAsEditing(todo.id)}
                  style={{
                    textDecoration: todo.isComplete ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      updateTodo(event, todo.id);
                    } else if (event.key === "Escape") {
                      cancelTodo(event, todo.id);
                    }
                  }}
                  defaultValue={todo.title}
                  autoFocus
                />
              )}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>

      <div>
        <TodoCompleteAllTodos />

        <TodoItemsRemaining />
      </div>
    </>
  );
};

export default Task;
