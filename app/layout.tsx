import Navbar from "@/components/Navbar";
import SidebarPage from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

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
		<ClerkProvider
			appearance={{
				baseTheme: {
					__type: "prebuilt_appearance",
				},
			}}>
			<html lang='en'>
				<body
					className={cn(
						inter.className,
						"select-none h-full w-full overflow-hidden bg-dark-1",
					)}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'>
						{/* <Menubar /> */}
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
