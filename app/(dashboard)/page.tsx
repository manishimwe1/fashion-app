import { AllProduct } from "@/actions/productActions";
import EmptyState from "@/components/EmptyState";
import TakePhotoApp from "@/components/TakePhoto";
import DashboardCard from "@/components/shared/DashboardCard";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductType } from "@/types";
import Link from "next/link";

export default async function Home() {
	const allProduct: ProductType[] = await AllProduct();
	if (!allProduct)
		return <EmptyState title={"No product found"} />;

	console.log(allProduct);

	return (
		<ScrollArea className=' w-full h-screen flex-1 p-6  flex flex-col gap-3 lg:gap-6 pb-28'>
			<HeaderTitle title='All product in store' />
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-3'>
				{allProduct.map((product: ProductType) => (
					<Link
						href={`/product/${product._id}`}
						key={product._id}>
						<DashboardCard product={product} />
					</Link>
				))}
			</section>

			{/* <TopBanner /> */}
		</ScrollArea>
	);
}
