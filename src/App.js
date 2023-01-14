import React, { useState, useRef, useEffect } from "react";
import Task from "./Task";
import "./App.css";
import { TodosContext } from "./context/TodosContext";
import TodoForm from "./TodoForm";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [ todos, setTodo ] = useLocalStorage('todos', []);
  const [ todoInput, setTodoInput ] = useState("");
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage('name', '');

  useEffect(()=>{
    nameInputEl.current.focus();

    return function cleanup(){
      console.log("cleaning up");
    }
  },[])

  function handleNameInput(e){
    setName(e.target.value);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodo,
        todoInput,
        setTodoInput,
      }}
    >
      <div>
        <h2>What is your name?</h2>
        <input 
          type="text"
          ref={nameInputEl}
          value={name}
          onChange={handleNameInput}
        />
        <p>Hello, {name}</p>
      </div>
      <TodoForm />
      {todos.length >0 ? <Task /> : ''}
    </TodosContext.Provider>
  );
}

export default App;
