"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/constant";
import { cn } from "@/lib/utils";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Menubar = () => {
	return (
		<nav className=' w-full h-10 flex gap-6 items-center'>
			<ul className=' hidden lg:flex gap-20 w-full justify-center '>
				{NAVLINKS.map((link) => (
					<Link
						key={link.route}
						href={link.route}
						className={cn(
							link.label === "SuperDeals"
								? "text-red-500"
								: "",
							"hover:underline hover:underline-offset-2 text-lg font-bold",
						)}>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Menubar;
