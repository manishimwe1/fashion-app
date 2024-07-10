import { model } from "mongoose";
import { models } from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	inStock: {
		type: Number,
		required: true,
	},
	buyedAt: {
		type: Number,
		required: true,
	},
});

export const Product =
	models.products || model("products", ProductSchema);
