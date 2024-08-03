import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";

interface task {
  id: number;
  status: string;
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<task[]>([]);
  const [formVisible, setFormVisible] = useState(false);

  const onAddTask = () => {
    setFormVisible(true);
  };

  const onEdit = () => {};

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddTask addtask="Add task" onAdd={onAddTask} />
      {formVisible && (
        <TaskForm
          formHeader="Add Todos"
          submitButton="Submit"
          onAdd={(todo) => {
            setTodos([...todos, { ...todo, id: todos.length + 1 }]);
          }}
          onClose={() => setFormVisible(false)}
        />
      )}

      <Todos
        onDelte={onDelete}
        onEdit={() => console.log("edit")}
        todos={todos}
      />
    </>
  );
};

export default App;
