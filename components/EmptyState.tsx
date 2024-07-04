import Image from "next/image";
import React from "react";

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
		</div>
	);
};

export default EmptyState;
