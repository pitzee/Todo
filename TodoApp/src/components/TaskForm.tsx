import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onClose: () => void;
  onAdd: (data: FormData) => void;
  formHeader: string;
  submitButton: string;
  defaultValues?: { title: string; status: string };
}

const schema = z.object({
  title: z.string().min(1, { message: "title is required" }),
  status: z.string().min(1, { message: "title is required" }),
});

type FormData = z.infer<typeof schema>;

const TaskForm = ({
  onClose,
  onAdd,
  formHeader,
  submitButton,
  defaultValues,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues });
  return (
    <>
      <form onSubmit={handleSubmit(onAdd)}>
        <h1>{formHeader}</h1>
        <div className="alert-dismissible">
          <button
            onClick={onClose}
            type="button"
            className="btn-close"
          ></button>
        </div>
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
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            status
          </label>
          <select
            {...register("status", { required: true })}
            className="form-select"
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
          {errors.status && (
            <p className="text-danger">{errors.status?.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          {submitButton}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
