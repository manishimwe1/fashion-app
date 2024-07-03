"use client";

// import {
// 	Tooltip,
// 	TooltipContent,
// 	TooltipProvider,
// 	TooltipTrigger,
// } from "@/components/ui/tooltip";
import { NAVLINKS } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarPage = () => {
	const pathname = usePathname();
	return (
		<section className=' hidden md:inline-flex lg:w-[250px] h-screen '>
			<aside className='w-full p-2 text-center flex flex-col gap-4'>
				<nav className=' py-5 '>
					{NAVLINKS.map((link) => {
						const isActive =
							link.route === pathname;
						return (
							<ul
								key={link.label}
								className={cn(
									" mt-2 py-1  rounded-lg group w-full",
									isActive &&
										"bg-[#212124]",
								)}>
								<Link
									href={link.route}
									className='flex items-center gap-4 p-2 px-4 font-medium text-dark-2 text-lg'>
									<Image
										src={link.image}
										alt={link.label}
										width={20}
										height={20}
										className=''
									/>
									<p className='hidden lg:flex text-sm'>
										{link.label}
									</p>
								</Link>
							</ul>
						);
					})}
				</nav>
			</aside>
		</section>
	);
};

export default SidebarPage;
