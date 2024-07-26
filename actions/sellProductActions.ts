"use server";

import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/productSchema";
import { SelledProduct } from "@/lib/database/models/selledProduct";
import { SoldItem } from "@/types";
import { ProductById } from "./productActions";
import { revalidatePath } from "next/cache";

export const SellProductAction = async (data: SoldItem) => {
	try {
		await connectToDB();
		console.log(data);
		
		const product = await SelledProduct.create(data);

		if (!product)
			return console.log(
				"Error in getting sold product",
			);

		const updateProduct = await ProductById(
			product.productId,
		);

		if (!updateProduct) {
			return console.log(
				"Error in updating  sold product>>>>",
			);
		}

		const result = await Product.updateOne(
			{ _id: updateProduct._id }, // Filter criteria
			{
				$set: {
					inStock:
						updateProduct.inStock -
						product.quantity,
				},
			},
		);

		if (!result)
			return console.log("Error in updating result");

		// console.log(result);

		revalidatePath("/");
		revalidatePath("/selled-lists");
		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error);
	}
};
export const AllSelledProductAction = async () => {
	try {
		await connectToDB();
		const product = await SelledProduct.find();

		if (!product)
			return console.log(
				"Error in getting sold product",
			);

		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error);
	}
};
