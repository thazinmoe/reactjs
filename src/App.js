import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function handleInput(e) {
    setTodoInput(e.target.value);
    console.log("setTodoInput");
  }

  function addTodo(e) {
    e.preventDefault();
    if(todoInput.trim().length === 0){
      return;
    }
    const todoList = {
      id: todos.length + 1,
      title: todoInput,
      isComplete: false
    };

    setTodo([...todos, todoList]);
    console.log("todos", todos);

    setTodoInput('')
  }

  const deleteTodo = (id) => {
    console.log("id", id)
    setTodo(todos.filter((tododelete) => tododelete.id !== id))
  }

  function completeTodo(id) {

    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    console.log("updateTodos", updateTodos);
    setTodo(updateTodos);
  }

  function markAsEditing(id) {
    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    setTodo(updateTodos)
  }

  function updateTodo(event, id) {
    const updateTodos = todos.map(todo => {
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

  function cancelEdit(event,id){
    const updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isEditing = false;
      }
      return todo;
    });
    console.log("cancel");
    setTodo(updateTodos);
  }


  return (
    <div>
      <input type="text"
        value={todoInput}
        onChange={handleInput}
        placeholder="What do you need to do?"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {!todo.isEditing ? (
                <span className='d-flex'>
                  <input
                    type="checkbox"
                    onChange={() => completeTodo(todo.id)}
                    checked={todo.isComplete ? true : false}
                  />
                  <span
                    onClick={() => markAsEditing(todo.id)}
                  >
                    {todo.title}
                  </span>
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={event => {
                    if(event.key === 'Enter'){
                      updateTodo(event, todo.id);
                    }else if(event.key === 'Escape'){
                      cancelEdit(event, todo.id);
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
    </div>
  );
}

export default App;
