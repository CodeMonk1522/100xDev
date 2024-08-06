import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ListView from "./components/ListView";
const App = () => {
  return (
    <div>
      <center>
        <h1>FoodList</h1>
        <ListView />
      </center>
    </div>
  );
};

export default App;
