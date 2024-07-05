import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className=' h-screen w-full flex items-center justify-between bg-[#09090B] overflow-hidden border border-red-500'>
			<SignUp />
		</div>
	);
}
