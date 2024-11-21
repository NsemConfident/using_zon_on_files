import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormValues } from "./FormSchema";
// import { Form } from '../ui/form';
const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("form data", data);
  };

  return (
    <div className="w-full flex justify-center">
      <form
        className="w-[30%] py-10 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" className="border border-black" {...register("name")} />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            className="border border-black"
            type="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            className="border border-black"
            type="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            className="border border-black"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p>{errors.age?.message}</p>}
        </div>
        <button className="bg-lime-700 px-2 py-1 rounded-sm w-[50%]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSection;
