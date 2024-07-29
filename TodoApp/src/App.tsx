import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";

// let tasks = ["reading"];

const App = () => {
  const [todos, setTodos] = useState(["reading", "writing"]);

  const addTodos = () => {
    setTodos([...todos, "writing"]);
  };

  return (
    <>
      <AddTask addtask="Add task" onAdd={addTodos} />
      <Todos todos={todos} />
    </>
  );
};

export default App;
