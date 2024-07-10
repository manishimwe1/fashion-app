import { PurchaseStatus } from "@/lib/validations";

export type ProductType = {
	_id: string;
	title: string;
	inStock: number;
	buyedAt: number;
	description: string;
};

export type ProductItemType = {
	_id: string;
	title: string;
	productId: string;
	description: string;
	brand: string;
	itemsInProduct: number;
	price: number;
};

export type SoldItem = {
	paid: PurchaseStatus;
	product: string;
	date: string;
	buyedAt: number;
	selledOn: number;
	selledTo: string;
};
