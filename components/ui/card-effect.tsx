"use client";

import { cn } from "@/lib/utils";
import { ProductItemType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Avatars from "../shared/Avatars";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "./scroll-area";
import EmptyState from "../EmptyState";

export const CardEffect = ({
	product,
	className,
}: {
	product: ProductItemType[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<
		number | null
	>(null);

	if (product.length <= 0) {
		return (
			<EmptyState title='Oops its look like this product is empty' />
		);
	}
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-2 lg:mt-4",
				className,
			)}>
			{product.map((item, idx) => (
				<Link
					href={item._id}
					key={item._id}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() =>
						setHoveredIndex(idx)
					}
					onMouseLeave={() =>
						setHoveredIndex(null)
					}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: {
										duration: 0.15,
									},
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 0.15,
										delay: 0.2,
									},
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription className='flex flex-col gap-4'>
							{item.itemsInProduct <= 20 && (
								<p className='bg-red-500 px-2 py-0.5 rounded-full absolute top-0 -right-2 text-black font-semibold text-[10px] rounded-br-none'>
									You need! to order new
									item
								</p>
							)}
							<div className='w-full flex justify-between items-center'>
								<Avatars
									seed={item.description}
									width={30}
									height={30}
								/>
								<p className='text-xs'>
									Items remain in stock
									<span
										className={cn(
											" ml-2 text-4xl font-bold",
											item.itemsInProduct <=
												20
												? "text-red-500"
												: "text-green-300",
										)}>
										{
											item.itemsInProduct
										}
									</span>
								</p>
							</div>
							<div className='text-start w-full'>
								<p className='text-stone-300'>
									{" "}
									Buy {item.price} Rwf at{" "}
									<span>
										02/08/2024,04:49
									</span>
								</p>
							</div>
							<ScrollArea className='mt-2 md:mt-4 h-28  text-balance '>
								{item.description}
							</ScrollArea>
						</CardDescription>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl px-2 h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className,
			)}>
			<div className='relative z-50'>
				<div className='p-2 md:p-4'>{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"text-zinc-100 font-bold tracking-wide mt-2",
				className,
			)}>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className,
			)}>
			{children}
		</div>
	);
};
