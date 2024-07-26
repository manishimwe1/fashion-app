import { AllSelledProductAction } from "@/actions/sellProductActions";
import EmptyState from "@/components/EmptyState";
import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/dataTable";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

const SelledItemsPage = async () => {
	const product = await AllSelledProductAction();
	// console.log(product, "this is product here>>>");

	if (!product)
		return <EmptyState title={"No product found"} />;

	return (
		<section className='h-[90%] border w-[90%] p-2 md:w-full overflow-x-scroll'>
			<DataTable columns={columns} data={product} />
		</section>
	);
};

export default SelledItemsPage;
