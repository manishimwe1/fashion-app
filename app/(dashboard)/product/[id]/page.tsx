import { ProductById } from "@/actions/productActions";
import { BorderBeamDemo } from "@/components/borderCardBeam";
import HeaderTitle from "@/components/shared/HeaderTitle";
import React from "react";
type Props = {
	params: {
		id: string;
	};
};
const ProductPage = async ({ params: { id } }: Props) => {
	console.log(id);

	const product = await ProductById(id);
	console.log(product);

	return (
		<div className='border w-full h-full flex-1 p-6  flex flex-col gap-3 lg:gap-6 '>
			<HeaderTitle
				id={id}
				children={
					<p className='text-sm'>
						All items in{" "}
						<span className='font-bold text-green-300'>
							{product.title}
						</span>
					</p>
				}
				button={true}
				btnText='Add new item'
			/>
			<BorderBeamDemo product={product} />
			{/* <QrcodeScanner /> */}
		</div>
	);
};

export default ProductPage;
