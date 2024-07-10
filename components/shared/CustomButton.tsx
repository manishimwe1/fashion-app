import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const CustomButton = ({
	title,
	iconSrc,
}: {
	title: string;
	iconSrc: string;
}) => {
	return (
		<Button
			className=' bg-dark-2 text-white  cursor-pointer p-3 hover:bg-dark-1 hover:border border-white/10 hover:transition-all duration-200 ease-in-out'
			asChild>
			<Link
				href={"/create-product"}
				className='flex gap-2 items-center'>
				<Image
					src={iconSrc}
					alt='plus circle icon'
					width={20}
					height={20}
				/>
				{title}
			</Link>
		</Button>
	);
};

export default CustomButton;
