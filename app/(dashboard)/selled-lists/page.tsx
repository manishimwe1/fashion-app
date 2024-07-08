import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/dataTable";
import React from "react";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		// ...
	];
}
const SelledItemsPage = async () => {
	const data = await getData();
	return (
		<section className='max-container'>
			<DataTable columns={columns} data={data} />
		</section>
	);
};

export default SelledItemsPage;
