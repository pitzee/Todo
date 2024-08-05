import TaskForm from "./TaskForm";

interface Props {
  onClose: () => void;
  onEditSubmit: (data: { title: string; status: string }) => void;
  task?: { title: string; status: string } | null;
}

const EditTask = ({ onClose, onEditSubmit, task }: Props) => {
  const defaultTask = task ?? { title: "", status: "" };
  return (
    <TaskForm
      formHeader="Edit todos"
      submitButton="Submit Edit"
      onClose={onClose}
      onAdd={onEditSubmit}
      defaultValues={defaultTask}
    ></TaskForm>
  );
};

export default EditTask;
