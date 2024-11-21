import {z} from "zod"

export type FormValues = z.infer<typeof FormSchema>;
export const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z
    .string()
    .min(8, "password must be atleast 8 characters")
    .regex(/[A-Z]/, "password must contain atleast one upper case letter"),
    age: z.number({ invalid_type_error: "Age must be a number" }).min(18, "You must be at least 18 years old"),
});