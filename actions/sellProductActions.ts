"use server";

import { connectToDB } from "@/lib/database/db.config";
import { SelledProduct } from "@/lib/database/models/selledProduct";
import { SoldItem } from "@/types";

export const SellProductAction = async (data: SoldItem) => {
	try {
		await connectToDB();
		const product = await SelledProduct.create(data);

		if (!product)
			return console.log(
				"Error in getting sold product",
			);

		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error);
	}
};
