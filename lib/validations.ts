import { z } from "zod";

export enum PurchaseStatus {
	// pending = "pending",
	notYet = "not yet",
	success = "success",
}

export const formSchema = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	inStock: z.coerce.number(),
	buyedAt: z.coerce.number(),
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
export const selledItemSchema = z.object({
	product: z.string().min(2, {
		message: "Product must be at least 2 characters.",
	}),
	buyedAt: z.coerce.number(),
	paid: z.enum(
		[
			// PurchaseStatus.pending,
			PurchaseStatus.notYet,
			PurchaseStatus.success,
		],
		{
			errorMap: (issue, ctx) => {
				return {
					message: `Paid must be one of: ${Object.values(
						PurchaseStatus,
					).join(", ")}`,
				};
			},
		},
	),
	selledOn: z.coerce.number(),
	quantity: z.coerce.number(),
	selledTo: z.string(),
	date: z.string(),
	phoneNumber:z.coerce.number() || undefined,
});
