import { ProductById } from "@/actions/productActions";
import EmptyState from "@/components/EmptyState";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { CreateForm } from "@/components/shared/createForm";
import { ProductType } from "@/types";
import React from "react";
type ParamsProps = {
	params: {
		id: string;
	};
};
const page = async ({ params: { id } }: ParamsProps) => {
	const product: ProductType = await ProductById(id);
	if (!product)
		return <EmptyState title={"No product found"} />;
	return (
		<section className='max-container'>
			<HeaderTitle title={`Edit ${product.title}`} />
			<div className='lg:max-w-3xl mx-auto  w-full'>
				<CreateForm product={product} />
			</div>
		</section>
	);
};

export default page;
