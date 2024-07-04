import { z } from "zod";

export const formSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	inStock: z.coerce.number(),
	description: z.string(),
});

export const itemSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	itemsInProduct: z.coerce.number(),
	description: z.string(),
	price: z.coerce.number(),
	brand: z.string(),
});
