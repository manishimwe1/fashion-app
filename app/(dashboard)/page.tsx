import { AllProduct } from "@/actions/productActions";
import EmptyState from "@/components/EmptyState";
import TakePhotoApp from "@/components/TakePhoto";
import CustomButton from "@/components/shared/CustomButton";
import DashboardCard from "@/components/shared/DashboardCard";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProductType } from "@/types";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const allProduct: ProductType[] = await AllProduct();
	if (!allProduct || allProduct.length <= 0)
		return <EmptyState title={"No product found"} />;

	console.log(allProduct);

	return (
		<ScrollArea className=' w-full h-screen flex-1 p-6  flex flex-col gap-3 lg:gap-6 pb-28'>
			<HeaderTitle title='All product in store'>
				<SignedIn>
					<CustomButton
						title='Add product'
						iconSrc='/plusCircle.svg'
					/>
				</SignedIn>
			</HeaderTitle>
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 mt-3'>
				{allProduct.map((product: ProductType) => (
					<DashboardCard
						product={product}
						key={product._id}
					/>
				))}
			</section>

			{/* <TopBanner /> */}
		</ScrollArea>
	);
}
