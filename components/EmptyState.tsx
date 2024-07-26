import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyState = ({ title }: { title: String }) => {
	return (
		<div className='w-full h-full flex items-center justify-center  flex-col gap-4 mt-6'>
			<Image
				src={"/emptyState.svg"}
				width={400}
				height={500}
				alt='empty'
			/>
			{title}
			<Button
				className='bg-dark-2 hover:bg-dark-1 hover:border border-white/10 '
				asChild>
				<Link
					href={"/create-product"}
					className='text-white/50'>
					Create Product
				</Link>
			</Button>
		</div>
	);
};

export default EmptyState;
