import { ClerkProvider } from "@clerk/nextjs";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// <ClerkProvider>
		<html lang='en'>
			<body className=' h-screen w-full flex items-center justify-center bg-[#09090B] overflow-hidden border border-red-500'>
				{children}
			</body>
		</html>
		// </ClerkProvider>
	);
}
