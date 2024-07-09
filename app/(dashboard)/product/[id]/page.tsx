import { AllItemAction } from "@/actions/ItemsAction";
import { ProductById } from "@/actions/productActions";
import EmptyState from "@/components/EmptyState";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { CardEffect } from "@/components/ui/card-effect";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ProductType } from "@/types";

type ParamsProps = {
	params: {
		id: string;
	};
};
const ProductPage = async ({
	params,
}: {
	params: { id: string };
}) => {
	console.log(params.id);
	const productId: ProductType = await ProductById(
		params.id,
	);
	const product = await AllItemAction(params.id);
	console.log(product, "this is product");

	if (!productId)
		return (
			<EmptyState title='oops!!,There is nothing here.' />
		);

	return (
		<ScrollArea className='max-container'>
			<HeaderTitle
				id={params.id}
				button={true}
				btnText='Add new item'>
				<p className='text-sm'>
					All items in{" "}
					<span className='font-bold text-green-300'>
						{productId.title}
					</span>
				</p>
			</HeaderTitle>
			{/* <BorderBeamDemo product={product} /> */}
			{/* <QrcodeScanner /> */}
			<CardEffect product={product} />
		</ScrollArea>
	);
};

export default ProductPage;
