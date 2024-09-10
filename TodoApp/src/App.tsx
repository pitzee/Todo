import { useState } from "react";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";
import TaskForm from "./components/TaskForm";
import EditTask from "./components/EditTask";
import FilterTask from "./components/FilterTask";
import "./Styles/App.css";
import Task from "./services/TaskInterface";

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
      {/* main div */}
      <div className="flex  items-center justify-center h-screen bg-slate-100">
        <div className="p-2 w-full mx-6 rounded-2xl bg-blue-300 md:w-1/2">
          {/* header div */}
          <div className="flex items-center justify-center font-extrabold mt-2 mb-2">
            <h1 className="text-font-bold text-black text-3xl ">Todo List</h1>
          </div>

          <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-40">
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
        </div>
      </div>
    </>
  );
};

export default App;
