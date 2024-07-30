interface task {
  id: number;
  status: string;
  title: string;
}

interface Props {
  todos: task[];
}

const Todos = ({ todos }: Props) => {
  return (
    <div className="card text-bg-info mx-auto ">
      <div className="card-body">
        {todos.length === 1 && <p>no task found</p>}

        {todos.map((el) => (
          <div key={el.id}>
            <p>
              {el.title}

              {el.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
