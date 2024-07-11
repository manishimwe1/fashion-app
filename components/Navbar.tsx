import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
const Navbar = async () => {
	const user = auth();
	console.log(user, "this is arg role");

	return (
		<header className=' w-full px-4 sticky top-0 z-20 border-b border-white/10'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 py-2'>
				<Link href={"/"}>
					<div className='relative h-10 w-40 cursor-pointer'>
						<Image
							src={"/logo.jpg"}
							fill
							className='object-contain invert'
							alt='logo'
						/>
					</div>
				</Link>
				<div className='flex items-center gap-3'>
					<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 py-1 px-2'>
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
						{/* <LanguageDropDown /> */}
						<DarkModeToggle />

						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton showName={true} />
						</SignedIn>
					</div>
				</div>{" "}
			</div>
		</header>
	);
};

export default Navbar;
