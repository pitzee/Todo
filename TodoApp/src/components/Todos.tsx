import "../Styles/Todos.css";

interface Task {
  id: number;
  status: string;
  title: string;
}

interface Props {
  todos: Task[];
  onDelte: (id: number) => void;
  onEditButton: (id: number) => void;
}

const Todos = ({ todos, onDelte, onEditButton }: Props) => {
  return (
    <div className="card ">
      <div className="card-body ">
        {todos.length === 0 && <p>no task found</p>}

        {todos.map((el) => (
          <div
            key={el.id}
            className="d-flex justify-content-between align-items-center"
          >
            <p>{el.title}</p>
            <div className="ml-auto">
              <button
                onClick={() => onEditButton(el.id)}
                className="btn btn-primary"
              >
                edit
              </button>
              <button onClick={() => onDelte(el.id)} className="btn btn-danger">
                del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
