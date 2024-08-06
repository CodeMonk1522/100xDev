import React from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
const App = () => {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
    </center>
  );
};

export default App;
