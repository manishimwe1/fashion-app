"use client";

import { ShoppingCartIcon } from "lucide-react";

const ShoppingCart = () => {
	return (
		<div className='flex items-center group px-4 py-2 rounded-full cursor-pointer space-x-1 relative'>
			<ShoppingCartIcon className='w-6 lg:w-8 h-6 lg:h-8 text-black group-hover:scale-105 transition-all ease-in-out' />
			<div className='flex flex-col  '>
				<p className='absolute top-0 right-2 bg-purple-500 font-bold text-white p-0.5 w-5  h-5 flex items-center justify-center text-xs rounded-full'>
					0
				</p>
				<p className='text-sm font-semibold hidden lg:inline-block text-white group-hover:underline transition-all ease-in-out'>
					Cart
				</p>
			</div>
		</div>
	);
};

export default ShoppingCart;
