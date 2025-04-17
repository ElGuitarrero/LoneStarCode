import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "LoneStar Code",
	description: "Innovative software solutions tailored to drive your business forward.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased bg-stone-100`}>
				
        <header>
          <Header/>
        </header>
        {/* <Header scrollY={typeof window !== "undefined" ? window.scrollY : 0}/> */}
				{children}

				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
