import { model } from "mongoose";
import { models } from "mongoose";
import { Schema } from "mongoose";

const ItemSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "products",
		required: true,
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

export const Item =
	models.item || model("item", ItemSchema);
