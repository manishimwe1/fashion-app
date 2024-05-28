import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ShoppingCart from "./ShoppingCart";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import LanguageDropDown from "./shared/LanguageDropDown";
const Navbar = async () => {
	return (
		<header className=' w-full px-4 sticky top-0 z-20'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 h-full py-2'>
				<Link href={"/"}>
					<div className='relative h-14 w-40 cursor-pointer'>
						<Image
							src={"/logo.jpg"}
							fill
							className='object-contain'
							alt='logo'
						/>
					</div>
				</Link>
				<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 py-1 px-2 min-w-[500px]'>
					<input
						className='outline-none  rounded-full placeholder:text-xs px-3  w-full bg-secondary border-none text-stone-950 font-semibold'
						placeholder='Search anything..'
					/>
					<div className='flex rounded-full p-0.5 cursor-pointer'>
						<Search className='w-8 h-8 text-stone-600 p-1' />
					</div>
					<button type='submit' hidden>
						search
					</button>
				</form>

				<div className='flex items-center gap-3 '>
					<LanguageDropDown />
					<DarkModeToggle />
					<Button variant={"link"}>
						Sign in
					</Button>
					<div className='relative h-full w-fit '>
						<Heart className='text-stone-500 h-8 w-8' />
						<span className='absolute flex items-center justify-center text-xs inset-0  font-bold '>
							0
						</span>
					</div>
					<div className='relative h-full w-fit '>
						<ShoppingBagIcon className='text-stone-500 h-8 w-8' />
						<span className='absolute flex items-center justify-center text-xs inset-0  font-bold !top-2'>
							0
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
