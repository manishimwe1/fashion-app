import { AllSelledProductAction } from "@/actions/sellProductActions";
import EmptyState from "@/components/EmptyState";
import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/dataTable";
<<<<<<< HEAD
import { ScrollArea } from "@/components/ui/scroll-area";
=======
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253

import React from "react";

const SelledItemsPage = async () => {
	const product = await AllSelledProductAction();
	// console.log(product, "this is product here>>>");

	if (!product)
		return <EmptyState title={"No product found"} />;

	return (
<<<<<<< HEAD
		<section className='h-[90%] border w-[90%] p-2 md:w-full overflow-x-scroll'>
=======
		<section className='h-full  p-2 w-full overflow-x-scroll'>
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253
			<DataTable columns={columns} data={product} />
		</section>
	);
};

export default SelledItemsPage;
