"use server";

import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/productSchema";
import { formSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createProduct = async (
	values: z.infer<typeof formSchema>,
	productId: string | undefined,
) => {
	try {
		await connectToDB();
		let product;
		// Implement product creation logic here : ProductType[]
		if (productId) {
			product = await Product.updateOne(
				{ _id: productId },
				{ values },
			);
			return product;
		} else {
			product = await Product.create(values);
		}

		if (!product)
			return console.log(
				"there is error creating product",
			);

		revalidatePath("/");
		return JSON.parse(JSON.stringify(product));
	} catch {
		console.log("Failed to create product");
	}
};

export const AllProduct = async () => {
	try {
		await connectToDB();
		// Implement product creation logic here : ProductType[]
		const product = await Product.find();

		if (!product)
			return console.log(
				"there is error creating product",
			);

		return JSON.parse(JSON.stringify(product));
	} catch {
		console.log("Failed to create product");
	}
};
export const ProductById = async (id: string) => {
	try {
		await connectToDB();
		if (!id) return;
		// Implement product creation logic here : ProductType[]
		const product = await Product.find({
			_id: id,
		});

		if (!product)
			return console.log(
				"there is error creating product",
			);

		return JSON.parse(JSON.stringify(product[0]));
	} catch {
		console.log("Failed to create product");
	}
};
