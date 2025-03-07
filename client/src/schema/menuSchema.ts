import { z } from "zod";

export const menuSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().min(1, { message: "Price cannot be zero or negative" }),
  image: z
    .union([z.string(), z.instanceof(File)])
    .optional()
    .refine(
      (file) => {
        if (file instanceof File) {
          return file.size !== 0;
        }
        return true;
      },
      { message: "Image file is required" }
    ),
});

// type
export type MenuFormSchema = z.infer<typeof menuSchema>;
