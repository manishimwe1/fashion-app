import { cn } from "@/lib/utils";
import { ProductType } from "@/types";
import { Progress } from "@/components/ui/progress";

import { ChartBarIcon } from "@heroicons/react/16/solid";
import React from "react";

const DashboardCard = ({
	product,
}: {
	product: ProductType;
}) => {
	const isLowInStock = product.inStock <= 20;
	return (
		<div
			className={cn(
				"border border-[#303046] h-full overflow-hidden w-full flex flex-col gap-4 cursor-pointer hover:shadow-md hover:shadow-[#27272A] rounded-lg hover:transition-all hover:ease-in-out hover:duration-300",
			)}>
			<Progress
				value={product.inStock}
				className={cn(
					isLowInStock
						? "text-red-500"
						: "text-green-500",
				)}
			/>
			<div className='w-full flex-col flex-grow h-full p-4'>
				<div className='w-full flex justify-between items-center'>
					<h4 className='text-sm font-bold  '>
						{product.title}
					</h4>
					<ChartBarIcon className='text-white h-5 w-5' />
				</div>
				<div className='flex flex-col w-full'>
					<div className='w-full flex items-center justify-between'>
						<p className='text-[9px] text-muted-foreground text-gray-600 '>
							{product.description}
						</p>
						{isLowInStock ? (
							<p className='font-extrabold text-lg text-red-500'>
								{product.inStock}
							</p>
						) : (
							<p className='font-extrabold text-lg text-green-500'>
								{product.inStock}
							</p>
						)}
					</div>
					<p className='text-[10px] text-muted-foreground text-gray-600 '>
						+10.8% from last month
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;
