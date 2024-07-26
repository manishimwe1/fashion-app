import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Buzima booster group",
	description: "invetory by buzima booster group",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					socialButtonsVariant: "auto",
					logoImageUrl: "/logo.jpg",
				},
				variables: {
					colorBackground: "#131619",
					colorPrimary: "#131619",
					colorText: "white",
					colorInputBackground: "#09090B",
					colorInputText: "white",
					colorShimmer: "white",
				},
			}}>
			<html lang='en'>
				<body
					className={cn(
						inter.className,
						"select-none h-full w-full overflow-hidden bg-dark-2 dark:bg-dark-1",
					)}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'>
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
