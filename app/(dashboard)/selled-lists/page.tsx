import { Payment, columns } from "@/components/columns";
import { DataTable } from "@/components/dataTable";
import React from "react";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			product: "Hp hgh core I5",
			paid: "success",
			date: new Date().toLocaleDateString(),
			buyed: 20000,
			purchased: 10000,
			selled: "Manzi kyle",
		},
		{
			id: "728ed52f",
			product: "Hp hgh core I5",
			paid: "not yet",
			date: new Date().toLocaleDateString(),
			buyed: 20000,
			purchased: 10000,
			selled: "Manzi kyle",
		},
		{
			id: "728ed52f",
			product: "Hp hgh core I5",
			paid: "pending",
			date: new Date().toLocaleDateString(),
			buyed: 20000,
			purchased: 10000,
			selled: "Manzi kyle",
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
