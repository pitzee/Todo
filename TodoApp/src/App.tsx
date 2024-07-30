import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "",
      status: "",
      id: 0,
    },
  ]);
  const [formVisible, setFormVisible] = useState(false);

  const onAddTask = () => {
    setFormVisible(true);
  };

  return (
    <>
      <AddTask addtask="Add task" onAdd={onAddTask} />
      {formVisible && (
        <TaskForm
          onAdd={(todo) => {
            setTodos([...todos, { ...todo, id: todos.length + 1 }]);
          }}
          onClose={() => setFormVisible(false)}
        />
      )}

      <Todos todos={todos} />
    </>
  );
};

export default App;
