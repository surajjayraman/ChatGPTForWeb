// TodoList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  console.log(`todos ${todos}`);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((response) => {
        setTodos(response.data);
        console.log(`response data ${response.data}`);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="center-div">
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.completed ? "Done" : "Not done yet"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
