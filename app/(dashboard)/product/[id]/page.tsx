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
		<ScrollArea className=' w-full h-screen flex-1 p-6  flex flex-col gap-3 lg:gap-6 pb-28'>
			<HeaderTitle
				id={params.id}
				element={
					<p className='text-sm'>
						All items in{" "}
						<span className='font-bold text-green-300'>
							{productId.title}
						</span>
					</p>
				}
				button={true}
				btnText='Add new item'
			/>
			{/* <BorderBeamDemo product={product} /> */}
			{/* <QrcodeScanner /> */}
			<CardEffect product={product} />
		</ScrollArea>
	);
};

export default ProductPage;
