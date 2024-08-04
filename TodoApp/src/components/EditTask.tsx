import TaskForm from "./TaskForm";

interface Props {
  onClose: () => void;
  onEditSubmit: (data: { title: string; status: string }) => void;
  task: { title: string; status: string };
}

const EditTask = ({ onClose, onEditSubmit, task }: Props) => {
  return (
    <TaskForm
      formHeader="Edit todos"
      submitButton="Submit Edit"
      onClose={onClose}
      onAdd={onEditSubmit}
      defaultValues={task}
    ></TaskForm>
  );
};

export default EditTask;
