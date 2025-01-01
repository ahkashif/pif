import "./globals.css";
import StoreProvider from "./storeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Public Investment Fund",
	description: "Public Investment Fund",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			dir="ltr">
			<body className={"relative"}>
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	);
}
