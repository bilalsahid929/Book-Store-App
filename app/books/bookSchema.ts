import { z } from "zod";

export const bookSchema = z.object({
  name: z.string().refine((val) => val.trim() !== "", {
    message: "Name is required",
  }),
  price: z
    .number()
    .refine((val) => val > 0, {
      message: "Price must be positive",
    })
    .refine((val) => val !== undefined, {
      message: "Price is required",
    }),
  category: z.string().refine((val) => val.trim() !== "", {
    message: "Category is required",
  }),
  description: z.string().refine((val) => val.trim() !== "", {
    message: "Description is required",
  }),
});
