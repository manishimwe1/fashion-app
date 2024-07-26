"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types";

import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import AddItemsModel from "./AddItemsModel";

const DashboardCard = ({
	product,
}: {
	product: ProductType;
}) => {
	const [showAddItemsModel, setShowAddItemsModel] =
		useState(false);
	const isLowInStock = product.inStock <= 10;

	const handleSellingProduct = () => {
		setShowAddItemsModel(true);
	};
	return (
		<div
			className={cn(
				"border border-[#303046] h-full overflow-hidden w-full flex flex-col gap-4 cursor-pointer hover:shadow-md hover:shadow-[#27272A] rounded-lg hover:transition-all hover:ease-in-out hover:duration-300",
			)}>
			<Progress value={product.inStock} />
			<div className='w-full flex-col flex-grow h-full p-3'>
				<div className='w-full flex justify-between items-center'>
					<h4 className='text-lg capitalize text-green-100 font-bold   text-nowrap truncate'>
						{product.title}
					</h4>

					<Link
						href={`/product/${product._id}/edit-product`}>
						<div className='w-fit p-2 bg-dark-2 rounded-lg shadow-md shadow-dark-1 group'>
							<Pencil className='text-white h-4 w-4 group-hover:rotate-45 hover:transition-all hover:duration-200 hover:ease-in-out' />
						</div>
					</Link>
				</div>
				<div className='flex flex-col w-full'>
					<div className='w-full flex items-center justify-between'>
						<p className='text-[9px] text-muted-foreground text-gray-600  line-clamp-3'>
							{product.description}
						</p>
						{isLowInStock ? (
							<p className='font-extrabold text-2xl text-red-500'>
								{product.inStock}
							</p>
						) : (
							<p className='font-extrabold text-2xl text-green-500'>
								{product.inStock}
							</p>
						)}
					</div>
					<h4 className='text-sm text-nowrap py-2'>
<<<<<<< HEAD
						Yaranguwe:
=======
						Buyed at:
>>>>>>> c0a725d794c10a1486bd56c17b71dddaa06c3253
						<span className='text-green-300 text-base font-semibold px-2'>
							{product.buyedAt}Rwf
						</span>
					</h4>
					<div className='w-full flex justify-between gap-4'>
						<p className='text-[10px] text-muted-foreground text-gray-600 text-nowrap'>
							on: 14/7/2020
						</p>
						<p className='text-[10px] text-muted-foreground text-gray-600  truncate'>
							+10.8% from last month
						</p>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-center w-full'>
				<Button
					className='flex items-center gap-2 group bg-dark-2 text-white  cursor-pointer p-3 hover:bg-dark-1 hover:border border-white/10 hover:transition-all duration-200 ease-in-out w-full'
					onClick={handleSellingProduct}>
					<Image
						src={"/arrowTrending.svg"}
						alt='plus circle icon'
						width={20}
						height={20}
						className='group-hover:invert'
					/>
					Sell this Product
				</Button>
			</div>

			{showAddItemsModel && (
				<AddItemsModel
					showAddItemsModel={showAddItemsModel}
					setShowAddItemsModel={
						setShowAddItemsModel
					}
					sellProduct={product}
				/>
			)}
		</div>
	);
};

export default DashboardCard;
