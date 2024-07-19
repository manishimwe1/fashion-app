"use client";

import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Search } from "lucide-react";

const SearchBar = () => {
	const [value, setValue] = useState("");

	const debouncedValue = useDebounce(value, 500);

	return (
		<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 py-1 px-2'>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className='outline-none text-white  rounded-full placeholder:text-xs px-3  w-full bg-secondary border-none font-semibold'
				placeholder='Search anything..'
			/>
			<div className='flex rounded-full p-0.5 cursor-pointer'>
				<Search className='w-8 h-8 text-stone-600 p-1' />
			</div>
			<button type='submit' hidden>
				search
			</button>
		</form>
	);
};

export default SearchBar;
