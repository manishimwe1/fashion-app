"use server";

import { connectToDB } from "@/lib/database/db.config";
import { ItemsInProduct } from "@/lib/database/models/itemSchema";
import { itemSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createItemAction = async (
	values: z.infer<typeof itemSchema>,
	id: string | undefined,
) => {
	if (!id) return;
	// console.log(values);

	try {
		await connectToDB();

		const data = {
			productId: id,
			title: values.title,
			itemsInProduct: values.itemsInProduct,
			description: values.description,
			price: values.price,
			brand: values.brand,
		};

		console.log(data, "this is saving data");

		const product = await ItemsInProduct.create(data);

		if (!product)
			return console.log(
				"there is error creating product",
			);

		revalidatePath(`product/${id}`);
		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error, "Failed to create items");
	}
};
export const AllItemAction = async (id: string) => {
	try {
		await connectToDB();

		// Implement product creation logic here : ProductType[]
		const product = await ItemsInProduct.find({
			productId: id,
		});

		if (!product)
			return console.log(
				"there is error creating product",
			);

		return JSON.parse(JSON.stringify(product));
	} catch {
		console.log("Failed to create items");
	}
};
