import { SearchIcon } from "lucide-react";

const SearchBox = () => {
	return (
		<div className='flex  border border-purple-400/80  items-center gap-2 rounded-3xl justify-between px-2'>
			<form action='' className=''>
				<input
					type='text'
					placeholder='Search...'
					className='bg-transparent py-2 pl-1  border-none outline-none focus-visible:outline-none text-slate-600 font-semibold'
				/>
			</form>
			<SearchIcon className='w-6 h-6 text-slate-400 ' />
		</div>
	);
};

export default SearchBox;
