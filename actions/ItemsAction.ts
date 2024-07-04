"use server";

import { connectToDB } from "@/lib/database/db.config";
import { Item } from "@/lib/database/models/itemSchema";
import { itemSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createItemAction = async (
	values: z.infer<typeof itemSchema>,
	id: string | undefined,
) => {
	if (!id) return;
	try {
		await connectToDB();
		const data = {
			values,
			productId: id,
		};
		// Implement product creation logic here : ProductType[]
		const product = await Item.create(data);

		if (!product)
			return console.log(
				"there is error creating product",
			);

		revalidatePath(`product/${id}`);
		return JSON.parse(JSON.stringify(product));
	} catch {
		console.log("Failed to create items");
	}
};
