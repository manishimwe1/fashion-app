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
