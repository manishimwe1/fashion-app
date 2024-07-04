import { AllItemAction } from "@/actions/ItemsAction";
import { ProductById } from "@/actions/productActions";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { CardEffect } from "@/components/ui/card-effect";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ProductType } from "@/types";
type Props = {
	params: {
		id: string;
	};
};
const ProductPage = async ({ params: { id } }: Props) => {
	console.log(id);
	const productId: ProductType = await ProductById(id);
	const product = await AllItemAction(id);
	console.log(product, "this is product");

	return (
		<ScrollArea className='border w-full h-screen flex-1 p-6  flex flex-col gap-3 lg:gap-6 pb-28'>
			<HeaderTitle
				id={id}
				children={
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
