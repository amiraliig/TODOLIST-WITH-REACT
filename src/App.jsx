import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useReducer } from "react";
import { TodoWithUseStat } from "./TodoWithUseStat";
import "./App.css";
function reducer(state, action) {
  // if (action.type == "increment") {
  //   return { count: state.count + 1 };
  // } else if (action.type == "decrement") {
  //   return { count: state.count - 1 };
  // } else {
  //   return { count: state.count };
  // }
  // return { count: state.count + 1 };
}
function App() {
  return (
    <>
      <TodoWithUseStat />
      
    </>
  );
}

export default App;
