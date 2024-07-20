"use client";

import { NAVLINKS } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const MobileMenu = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger>
				<MenuIcon className='h-10 w-10 text-stone-200' />
			</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<nav className=' py-5 '>
						{NAVLINKS.map((link) => {
							const isActive =
								link.route === pathname;
							return (
								<ul
									key={link.label}
									className={cn(
										" mt-2 py-1 text-white font-semibold hover:border border-white/10  rounded-lg group w-full",
										isActive &&
											" bg-[#212124] ",
									)}>
									<Link
										href={link.route}
										className='flex items-center gap-4 p-2 px-4 font-bold text-dark-2 text-lg'>
										<SheetClose className='w-full flex items-center gap-2'>
											<Image
												src={
													link.image
												}
												alt={
													link.label
												}
												width={20}
												height={20}
												className=''
											/>

											<p className='text-white'>
												{link.label}
											</p>
										</SheetClose>
									</Link>
								</ul>
							);
						})}
					</nav>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
