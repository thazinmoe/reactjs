import React, { useState, useRef, useEffect } from "react";
import Task from "./Task";
import "./App.css";
import "./reset.css";
import { TodosContext } from "./context/TodosContext";
import TodoForm from "./TodoForm";
import useLocalStorage from "./hooks/useLocalStorage";
import axios from "axios";
import Container from "react-bootstrap/Container";

function App() {
  const [todos, setTodo] = useLocalStorage("todos", []);
  const [todoInput, setTodoInput] = useState("");
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage("name", "");
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState('all');

  function todosFiltered() {
    if(filter === 'all'){
      return todos;
    }else if(filter === 'active'){
      return todos.filter(todo => !todo.isComplete);
    }else if(filter === 'completed'){
      return todos.filter(todo => todo.isComplete);
    }
  }

  const baseURL = "https://fakestoreapi.com/products?limit=3";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    nameInputEl.current.focus();

    return function cleanup() {
      console.log("cleaning up");
    };
  }, []);


  function handleNameInput(e) {
    setName(e.target.value);
  }

  if (!post) return null;
  console.log("post", post);

  
  return (
   <div style={{padding: '5%'}}>
     <Container  className="col-lg-6 col-md-8 col-xs-12 p-5 bg-info rounded-3">
     <TodosContext.Provider
      value={{
        todos,
        setTodo,
        todoInput,
        setTodoInput,
        filter,
        setFilter,
        todosFiltered,
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
      <ul className="pul">
        {post.map((p, pid) => {
          return (
            <li key={pid}>
              <h4>{p.title}</h4>
              <p>{p.category}</p>
            </li>
          );
        })}
      </ul>
      {todos.length > 0 ? <Task /> : ""}
      
    </TodosContext.Provider>
    </Container>
    </div>
  );
}

export default App;
