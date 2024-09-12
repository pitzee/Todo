import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../Styles/taskform.css";

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
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues });
  return (
    <>
      <div className="rounded bg-gray-200 mt-2 p-2">
        <form
          onSubmit={handleSubmit((data: FormData) => {
            onAdd(data);
            reset();
          })}
        >
          <div className="flex justify-between mb-2">
            <h1 className=" font-bold">{formHeader}</h1>

            <button onClick={onClose} type="button" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 border-2 bg-red-500 rounded-2xl"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="border-2 ">
            <label htmlFor="title" className="flex flex-col font-bold">
              Title
            </label>
            <input
              {...register("title", { required: true, minLength: 1 })}
              id="title"
              type="text"
              className="rounded border-2 border-gray-300 max-w-1/2 mt-2"
            />
            {errors.title && (
              <p className="font text-red-600">{errors.title?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="status" className="flex flex-col font-bold">
              status
            </label>
            <select
              {...register("status", { required: true })}
              className="rounded border-2 border-gray-300 font-bold mt-2 p-1"
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
            {errors.status && (
              <p className="text-red-500">{errors.status?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 p-2 border-2 rounded-md hover:text-white border-white mt-2"
          >
            {submitButton}
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
