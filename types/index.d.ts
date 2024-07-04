export type ProductType = {
	_id: string;
	title: string;
	inStock: number;
	description: string;
};

export type ProductItemType = {
	_id: string;
	title: string;
	productId: string;
	description: string;
	brand: string;
	itemsInprodoct: number;
	price: number;
};
