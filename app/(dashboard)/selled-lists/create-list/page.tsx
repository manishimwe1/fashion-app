import CreateSelledItemForm from "@/components/shared/CreateSelledItemForm";
import HeaderTitle from "@/components/shared/HeaderTitle";
import React from "react";

const page = () => {
	return (
		<section className='max-container'>
			<HeaderTitle title='Selled item to day 🤑' />
			<div className='w-full px-4 gap-12 flex flex-col md:flex-row items-center justify-between'>
				<CreateSelledItemForm />
				<div className='bg-gray-400 h-full w-[300px]'></div>
			</div>
		</section>
	);
};

export default page;
