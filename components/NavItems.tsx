"use client";
import { NAVLINKS } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
	const pathname = usePathname();

	return (
		<nav className=' items-center hidden lg:flex w-full gap-3 justify-end'>
			{NAVLINKS.map((link) => {
				const isActive = pathname === link.route;
				return (
					<ul
						key={link.route}
						className=' px-2  '>
						<Link
							href={link.route}
							className={cn(
								"text-nowrap font-bold text-lg text-stone-500 capitalize",
								isActive &&
									"underline text-secondary-foreground underline-offset-4 decoration-primary decoration-4",
							)}>
							{link.label}
						</Link>
					</ul>
				);
			})}
		</nav>
	);
};

export default NavItems;
