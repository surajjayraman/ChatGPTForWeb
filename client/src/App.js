// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/create" component={TodoForm} />
      </Switch>
    </Router>
  );
}

export default App;