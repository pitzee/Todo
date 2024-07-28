interface Props {
  todos: string[];
}

const Todos = ({ todos }: Props) => {
  return (
    <div className="card text-bg-info mx-auto ">
      <div className="card-body">{todos}</div>
    </div>
  );
};

export default Todos;
