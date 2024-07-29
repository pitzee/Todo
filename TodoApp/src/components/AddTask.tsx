interface Props {
  addtask: string;
  onAdd: () => void;
}

const AddTask = ({ addtask, onAdd }: Props) => {
  return (
    <button onClick={onAdd} type="button" className="btn btn-primary">
      {addtask}
    </button>
  );
};

export default AddTask;
