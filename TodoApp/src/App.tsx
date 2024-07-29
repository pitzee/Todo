import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";

const todos = ["reading"];
const App = () => {
  // const [todos, setTodos] = useState(["reading", "writing"]);
  const [formVisible, setFormVisible] = useState(false);

  const addTodos = () => {
    setFormVisible(true);
  };

  return (
    <>
      <AddTask addtask="Add task" onAdd={addTodos} />
      {formVisible && (
        <TaskForm
          onAdd={(data) => console.log(data)}
          onClose={() => setFormVisible(false)}
        />
      )}
      <Todos todos={todos} />
    </>
  );
};

export default App;
