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
<<<<<<< HEAD
	phoneNumber: number;
=======
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253
};

// ====== USER PARAMS
export type CreateUserParams = {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	photo: string;
};

export type UpdateUserParams = {
	firstName: string;
	lastName: string;
	photo: string;
};

// ====== EVENT PARAMS
export type CreateEventParams = {
	userId: string;
	event: {
		title: string;
		description: string;
		location: string;
		imageUrl: string;
		startDateTime: Date;
		endDateTime: Date;
		categoryId: string;
		price: string;
		isFree: boolean;
		url: string;
	};
	path: string;
};
