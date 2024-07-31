import { HStack } from "@chakra-ui/react";

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
      <div className="card-body ">
        {todos.length === 0 && <p>no task found</p>}

        {todos.map((el) => (
          <div
            key={el.id}
            className="d-flex justify-content-between align-items-center"
          >
            <p>{el.title}</p>
            <div className="ml-auto">
              <button className="btn btn-danger">del</button>
              <button className="btn btn-primary">edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
