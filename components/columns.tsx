"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import Avatars from "./shared/Avatars";

export type Payment = {
	id: string;
	product: string;
	paid: "pending" | "not yet" | "success";
	selledOn: number;
	buyed: number;
	date: string;
	selledTo: string;
	profit: string;
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
					<div className='border-green-400 rounded-full h-6 w-6 flex items-center justify-center '>
						<Avatars
							seed={product?.toString() ?? ""}
							width={30}
							height={30}
						/>
					</div>
					<p className='text-nowrap font-semibold capitalize text-green-100'>
						{product}
					</p>
				</div>
			);
		},
	},
	{
		accessorKey: "buyedAt",
		header: "Yaranguwe",
	},
	{
		accessorKey: "selledOn",
		header: "Purchased to",
	},
	{
		accessorKey: "selledTo",
		header: "Selled to",
		cell({ row }) {
			const name: ReactNode =
				row.getValue("selledTo");

			return (
				<div className='flex items-center gap-2'>
					<p className='text-nowrap font-semibold text-xs'>
						{name}
					</p>
				</div>
			);
		},
	},
	{
		accessorKey: "createAt",
		header: "Date",
		cell({ row }) {
			const createAt = row.getValue("createAt");
			//@ts-ignore
			const date = new Date(createAt);
			const nameDate = date.toLocaleString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
			});
			return (
				<div className='flex items-center gap-2'>
					<p className='text-nowrap font-semibold text-xs'>
						{nameDate}
					</p>
				</div>
			);
		},
	},
	{
		accessorKey: "profit",
		header: "Profit",
		cell({ row }) {
			const buyedAt: number = row.getValue("buyedAt");
			const selledOn: number =
				row.getValue("selledOn");

			const profit = selledOn - buyedAt;

			return (
				<p className='text-nowrap font-semibold text-xs text-right'>
					{profit}
				</p>
			);
		},
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
