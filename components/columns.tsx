"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./ui/badge";
import { ReactNode } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	product: string;
	paid: "pending" | "not yet" | "success";
	purchased: number;
	buyed: number;
	date: string;
	selled: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "product",
		header: "Product",
		cell({ row }) {
			const product: ReactNode =
				row.getValue("product");

			return (
				<div className='flex items-center gap-2'>
					<div className='bg-green-400 rounded-full h-6 w-6 flex items-center justify-center '>
						H
					</div>
					<p>{product}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "buyed",
		header: "Buyed at",
	},
	{
		accessorKey: "purchased",
		header: "Purchased to",
	},
	{
		accessorKey: "selled",
		header: "Selled to",
	},
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		accessorKey: "paid",
		header: "Paid",
		cell({ row }) {
			const status = row.getValue("paid");
			if (status === "pending") {
				return (
					<Badge className='bg-blue-600 cursor-pointer hover:bg-blue-700 text-blue-200 px-2'>
						Pending
					</Badge>
				);
			} else if (status === "not yet") {
				return (
					<Badge className='bg-red-400 cursor-pointer hover:bg-red-700 text-red-100 px-3'>
						Not yet
					</Badge>
				);
			} else if (status === "success") {
				return (
					<Badge className='bg-green-400 cursor-pointer hover:bg-green-700 text-green-100 px-3'>
						Success
					</Badge>
				);
			}
		},
	},
];
