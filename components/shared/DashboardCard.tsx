import { ChartBarIcon } from "@heroicons/react/16/solid";
import React from "react";

const DashboardCard = () => {
	return (
		<div className='border border-[#303046] h-full p-4 w-full flex flex-col gap-4 cursor-pointer hover:shadow-md hover:shadow-[#27272A] rounded-lg hover:transition-all hover:ease-in-out hover:duration-300'>
			<div className='w-full flex justify-between items-center'>
				<h4 className='text-sm font-bold  '>
					Adapters
				</h4>
				<ChartBarIcon className='text-white h-5 w-5' />
			</div>
			<div className='flex flex-col w-full'>
				<p className='font-extrabold text-lg text-white'>
					120
				</p>
				<p className='text-[10px] text-muted-foreground text-gray-600 '>
					+10.8% from last month
				</p>
			</div>
		</div>
	);
};

export default DashboardCard;
