import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ChilePassingData from "../ChilePassingData/ChilePassingData" ;

// Define the validation schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  childFiles: z.array(
    z.object({
      file: z.instanceof(File).optional(),
    })
  ),
});

type FormData = z.infer<typeof schema>;

const ParentComponent = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      childFiles: [],
    },
  });

  const { handleSubmit, register, control, setValue, getValues } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data); // Log the complete form data
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Parent Input */}
        <div>
          <label>Name:</label>
          <input {...register('name')} />
        </div>

        {/* Multiple Child Components */}
        {[0, 1, 2].map((index) => (
          <ChilePassingData
            key={index}
            index={index}
            setValue={setValue}
            getValues={getValues}
          />
        ))}

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default ParentComponent;
