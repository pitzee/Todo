import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onClose: () => void;
  onAdd: (data: FormData) => void;
}

const schema = z.object({
  title: z.string().min(1, { message: "title is required" }),
});

type FormData = z.infer<typeof schema>;

const TaskForm = ({ onClose, onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <h1>Add todo</h1>
      <div className="alert-dismissible">
        <button onClick={onClose} type="button" className="btn-close"></button>
      </div>
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            {...register("title", { required: true, minLength: 1 })}
            id="title"
            type="text"
            className="form-control"
          />
          {errors.title && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>
        <select className="form-select mb-3">
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
        <button type="submit" className="btn btn-primary mb-3">
          Add task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
