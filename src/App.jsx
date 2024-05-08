import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;
