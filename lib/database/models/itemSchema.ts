import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
	productId: {
		type: String,
	},

	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	itemsInProduct: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

export const ItemsInProduct =
	models.itemsInProduct ||
	model("itemsInProduct", ItemSchema);
