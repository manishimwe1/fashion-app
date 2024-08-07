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
		min: [0, "Price must be at least 0"],
	},
	buyedAt: {
		type: Number,
		required: true,
	},
});
ProductSchema.index({ title: "text", description: "text" });

export const Product =
	models.products || model("products", ProductSchema);
