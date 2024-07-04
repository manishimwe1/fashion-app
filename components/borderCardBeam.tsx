import { ProductType } from "@/types";
import { BorderBeam } from "./shared/border-beam";
import { Loader2 } from "lucide-react";

export function BorderBeamDemo({
	product,
}: {
	product: ProductType;
}) {
	return (
		<div className='relative rounded-xl w-fit  p-4 border border-white/20'>
			{product ? (
				<div className='text-white w-full '>
					<p>{product.title}</p>
				</div>
			) : (
				<Loader2 className='animate-spin h-5 w-5 text-center self-center' />
			)}

			<BorderBeam
				className='border border-white/20'
				size={250}
				duration={12}
				delay={9}
			/>
		</div>
	);
}
