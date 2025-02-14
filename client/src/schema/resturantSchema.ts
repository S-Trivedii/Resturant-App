import { z } from "zod";

export const resturantFormSchema = z.object({
  resturantName: z.string().nonempty({ message: "Resturant name is required" }),
  city: z.string().nonempty({ message: "City name is required" }),
  country: z.string().nonempty({ message: "Country name is required" }),
  deliveryTime: z
    .number()
    .min(0, { message: "Delivery time cannot be negative" }),
  cuisine: z.array(z.string()),
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, { message: "Image file is required" }),
});

// type
export type ResturantFormSchema = z.infer<typeof resturantFormSchema>;
