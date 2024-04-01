import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ShoppingCart from "./ShoppingCart";
import { Search } from "lucide-react";
const Navbar = async () => {
	return (
		<header className='bg-primary saturate-150 brightness-100 w-full px-4 sticky top-0 z-20'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 h-full py-2'>
				<Link href={"/"}>
					<div className='relative h-14 w-20 cursor-pointer'>
						<Image
							src={"/logo.jpg"}
							fill
							className='object-contain invert'
							alt='logo'
						/>
					</div>
				</Link>
				<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 py-1 px-2 flex-1'>
					<input
						className='outline-none text-stone-500 rounded-full  w-full bg-secondary border-none text-stone-950 font-semibold'
						placeholder='Search everything at online and in store'
					/>
					<div className='bg-primary flex rounded-full p-0.5 cursor-pointer'>
						<Search className='w-8 h-8 text-muted p-1' />
					</div>
					<button type='submit' hidden>
						search
					</button>
				</form>
				{/* {user ? (
					<UserButton />
				) : ( */}
				<div className='flex items-center gap-1 '>
					{/* <UserIcon className='lg:w-8  w-6 lg:h-8' /> */}

					<form action={""} className=' !p-0'>
						<Button
							variant={"link"}
							className='!p-0 text-slate-100'>
							Sign in
						</Button>
					</form>
				</div>
				{/* )} */}
				<ShoppingCart />
			</div>
		</header>
	);
};

export default Navbar;
