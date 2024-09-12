import "../Styles/Todos.css";
import Task from "../services/TaskInterface";

interface Props {
  todos: Task[];
  onDelte: (id: number) => void;
  onEditButton: (id: number) => void;
}

const Todos = ({ todos, onDelte, onEditButton }: Props) => {
  return (
    <div className="span mt-2 mb-2 border-2 border-gray-300 rounded">
      {todos.length === 0 && (
        <p className="flex font-bold justify-center  bg-white h-10">
          No Task Found
        </p>
      )}

      {todos.map((el) => (
        <div
          key={el.id}
          className="flex justify-between border-2 rounded p-1 bg-white"
        >
          <p className="flex flex-col font-sans font-bold">{el.title}</p>
          <div className="ml-auto">
            <button
              onClick={() => onEditButton(el.id)}
              className="bg-blue-700 rounded-md p-1 hover:text-white border-2 font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => onDelte(el.id)}
              className="bg-red-500 p-1 hover:text-white rounded-md border-2 font-bold"
            >
              Del
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
