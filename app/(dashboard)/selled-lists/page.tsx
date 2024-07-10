import { AllSelledProductAction } from "@/actions/sellProductActions";
import EmptyState from "@/components/EmptyState";
import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/dataTable";

import React from "react";

const SelledItemsPage = async () => {
	const product = await AllSelledProductAction();
	console.log(product, "this is product here>>>");

	if (!product)
		return <EmptyState title={"No product found"} />;

	return (
		<section className='max-container'>
			<DataTable columns={columns} data={product} />
		</section>
	);
};

export default SelledItemsPage;
