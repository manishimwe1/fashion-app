import Navbar from "@/components/Navbar";
import SidebarPage from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='h-full w-full'>
			<Navbar />
			<div className='h-screen  flex items-start justify-between gap-4 overflow-hidden'>
				<SidebarPage />

				{children}
				<Toaster />
			</div>
		</main>
	);
}
