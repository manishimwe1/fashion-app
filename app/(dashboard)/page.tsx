import { DarkModeToggle } from "@/components/DarkModeToggle";
import DashboardCard from "@/components/shared/DashboardCard";
import HeaderTitle from "@/components/shared/HeaderTitle";
import TopBanner from "@/components/shared/TopBanner";
import { Button } from "@/components/ui/button";
import { ChartBarIcon } from "@heroicons/react/16/solid";

export default function Home() {
	return (
		<main className='flex flex-col gap-4 w-full py-6  flex-1 h-full'>
			<HeaderTitle title='All product in store' />
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4'>
				<DashboardCard />
				<DashboardCard />
			</section>

			{/* <TopBanner /> */}
		</main>
	);
}
