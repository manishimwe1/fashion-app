import HeaderTitle from "@/components/shared/HeaderTitle";
import { CreateForm } from "@/components/shared/createForm";
import React from "react";

const page = () => {
	return (
		<section className='flex flex-col gap-4 w-full py-6  flex-1 h-full'>
			<HeaderTitle title='Create product' />
			<div className='lg:max-w-3xl mx-auto  w-full'>
				<CreateForm />
			</div>
		</section>
	);
};

export default page;
