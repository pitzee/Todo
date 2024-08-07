import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";
import EditTask from "./components/EditTask";
import FilterTask from "./components/FilterTask";
import "./Styles/App.css";

interface Task {
  id: number;
  status: string;
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

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
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const visibleTodos = selectedCategory
    ? todos.filter((e) => e.status === selectedCategory)
    : todos;

  return (
    <>
      <h1 id="todos">Todo List</h1>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <AddTask addtask="Add task" onAdd={onAddTask} />
        <FilterTask
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>

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
            setFormVisible(false);
          }
        }}
        todos={visibleTodos}
      />
    </>
  );
};

export default App;
