import { model } from "mongoose";
import { Schema, models } from "mongoose";

const SelledProductSchema = new Schema({
	product: {
		type: String,
		required: true,
	},
	selledTo: {
		type: String,
		required: true,
	},
	paid: {
		type: String,
		required: true,
	},
	selledOn: {
		type: Number,
		required: true,
	},
	buyedAt: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},

	createAt: {
		type: Date,
		default: new Date(),
	},
	productId: {
		type: Schema.Types.ObjectId,
		ref: "products",
	},
});

export const SelledProduct =
	models.selledProducts ||
	model("selledProducts", SelledProductSchema);
