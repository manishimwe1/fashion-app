import HeaderTitle from "@/components/shared/HeaderTitle";
import { CreateForm } from "@/components/shared/createForm";

const page = () => {
	return (
		<section className='flex flex-col gap-4 w-full py-6  flex-1 h-full px-6 lg:px-0'>
			<HeaderTitle title='Create product' />
			<div className='lg:max-w-3xl mx-auto  w-full h-full'>
				<CreateForm />
			</div>
		</section>
	);
};

export default page;
