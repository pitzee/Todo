interface Props {
  addtask: string;
  onAdd: () => void;
}

const AddTask = ({ addtask, onAdd }: Props) => {
  return (
    <button
      onClick={onAdd}
      type="button"
      className="rounded-md  p-2  border-2 bg-blue-700 hover:text-white font-sans font-bold "
    >
      {addtask}
    </button>
  );
};

export default AddTask;
