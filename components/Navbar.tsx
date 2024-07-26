import { DarkModeToggle } from "@/components/DarkModeToggle";
import Image from "next/image";
import Link from "next/link";

import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SearchBarBox from "./shared/SearchBar";
import { MenuIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {
	const user = await currentUser();

	return (
		<header className=' w-full px-4 sticky top-0 z-20 border-b border-white/10'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 py-2'>
				<Link href={"/"}>
					<div className='relative h-10 w-20 md:w-40 cursor-pointer'>
						<Image
							src={"/logo.jpg"}
							fill
							className='object-contain invert'
							alt='logo'
						/>
					</div>
				</Link>
				<div className='flex items-center gap-3'>
					<SearchBarBox />

					<div className='flex items-center gap-3 '>
						{/* <LanguageDropDown /> */}
						<DarkModeToggle />

						<div className='hidden md:inline-block'>
							<SignedOut>
								<SignInButton
									signUpFallbackRedirectUrl={
										"/"
									}
								/>
							</SignedOut>
							<SignedIn>
								<UserButton
									showName={true}
								/>
							</SignedIn>
						</div>
						<div className='md:hidden flex items-center w-fit h-fit'>
							<MobileMenu />
						</div>
					</div>
				</div>{" "}
			</div>
		</header>
	);
};

export default Navbar;
