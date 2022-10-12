import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const loadingNumber = useMemo(() => {
    return loadingNumberFromData(count);
  }, [count]);
  const [todos, setTodos] = useState([]);

  const handlerIncrement = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((currentTodo) => [...currentTodo, "Add AnyThing you want to add"]);
  };

  return (
    <div className="App">
      <h1>Count App</h1>

      <h2>LocalCount:{count}</h2>
      <button onClick={handlerIncrement}>Increment</button>
      <h2>Total Count:{loadingNumber}</h2>
      <h1>WondoerFull Todo App</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <button onClick={addTodo}>AddTodo</button>
    </div>
  );
}

const loadingNumberFromData = (number) => {
  for (let i = 0; i < 10000; i++) {
    number++;
  }
  return number;
};
