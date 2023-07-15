import React from "react";
import "./../styles/App.css";
import Parent from "./Parent";

const App = () => {
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Parent />
    </div>
  );
};

export default App;
