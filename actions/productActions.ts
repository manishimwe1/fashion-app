"use server";

import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/productSchema";
import { formSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createProduct = async (
	values: z.infer<typeof formSchema>,
) => {
	try {
		await connectToDB();

		const product = await Product.create(values);

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
export const EditProduct = async (
	values: z.infer<typeof formSchema>,
	productId: string | undefined,
) => {
	try {
		await connectToDB();

		if (!productId) {
			return null;
		}
		const product = await Product.findByIdAndUpdate(
			{ _id: productId },
			{
				title: values.title,
				description: values.description,
				inStock: values.inStock,
				buyedAt: values.buyedAt,
			},
		);

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
		const product = await Product.find().sort({
			metacritic: -1,
		});

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
export const SearchInProduct = async (terms: string) => {
	try {
		await connectToDB();
		if (!terms) return;
		// Implement product creation logic here : ProductType[]

		const product = await Product.find({
			$text: { $search: terms },
		});

		if (!product)
			return console.log(
				"there is error searching product",
			);

<<<<<<< HEAD
		// console.log(product,'product here>>>');
=======
		console.log(product);
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253

		return JSON.parse(JSON.stringify(product));
	} catch (error: any) {
		console.log(
			"Failed to search this product",
			error.message,
		);
	}
};
