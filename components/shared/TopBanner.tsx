const TopBanner = () => {
	return (
		<div className='grid grid-cols-1 gap-0.5 lg:grid-cols-3 w-full h-full'>
			<div className='bg-rose-300/50 py-1 w-full h-fit flex flex-col items-center justify-center text-center'>
				<p className='text-sm'>FREE UK DELIVERY</p>
				<p className='text-xs'>
					on orders over £35
				</p>
			</div>
			<div className='bg-rose-300/50 py-1 w-full h-fit flex flex-col items-center justify-center text-center'>
				<p className='text-sm font-semibold'>
					20% OFF EVERYTHING
				</p>
				<p className='text-xs'>
					Checkout Code 'TAKE20' (exc sale)
				</p>
			</div>
			<div className='bg-rose-300/50 py-1 w-full h-fit flex flex-col items-center justify-center text-center'>
				<p className='text-sm'>
					WORLDWIDE DELIVERY
				</p>
				<p className='text-xs'>From £9.95</p>
			</div>
		</div>
	);
};

export default TopBanner;
