// App.js
import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <p className="center-div">Manage Your Day</p>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<TodoForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
