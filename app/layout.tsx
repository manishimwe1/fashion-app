import Navbar from "@/components/Navbar";
import SidebarPage from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					inter.className,
					"select-none min-h-screen w-full overflow-hidden bg-[#09090B]",
				)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange>
					<Navbar />
					{/* <Menubar /> */}
					<main className=' min-h-screen flex items-start justify-between gap-4'>
						<SidebarPage />
						{children}
						<Toaster />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
