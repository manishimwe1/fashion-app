import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
	const allProduct = [1, 2, 3, 4, 5, 6, 7];
	return (
		<main className='flex flex-col gap-4 w-full py-6  flex-1 h-full px-6'>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
				{allProduct.map((i) => (
					<Skeleton
						key={i}
						className='w-full h-[64px] rounded-lg'
					/>
				))}
			</div>
		</main>
	);
};

export default loading;
