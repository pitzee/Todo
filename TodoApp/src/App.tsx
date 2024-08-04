import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";
import EditTask from "./components/EditTask";

interface task {
  id: number;
  status: string;
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<task[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onAddTask = () => {
    setFormVisible(true);
    setEditFormVisible(false);
  };

  const onEdit = (data: { title: string; status: string }) => {
    if (currentTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === currentTask.id
            ? { ...todo, title: data.title, status: data.status }
            : todo
        )
      );
      setEditFormVisible(false);
    }

    // setTodos(
    //   todos.map((todo) =>
    //     todo.title === data.title
    //       ? { ...todo, title: "reading", status: "complete" }
    //       : todo
    //   )
    // );
  };

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
      {editFormVisible && (
        <EditTask
          onClose={() => setEditFormVisible(false)}
          onEditSubmit={onEdit}
          task={currentTask}
        />
      )}

      <Todos
        onDelte={onDelete}
        onEditButton={(id: number) => {
          const taskToEdit = todos.find((todo) => todo.id === id);
          if (taskToEdit) {
            setCurrentTask(taskToEdit);
            setEditFormVisible(true);
            setEditFormVisible(false);
          }
          setEditFormVisible(true);
          setFormVisible(false);
        }}
        todos={todos}
      />
    </>
  );
};

export default App;
