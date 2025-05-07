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
	title: "Web Design & Digital Solutions in Texas | Lone Star Code",
	description:
		"Custom web design and digital solutions for small businesses in Texas. Fast, mobile-friendly, and made to help your brand grow online.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Web Design in Texas | Lone Star Code</title>
				<meta
					name="description"
					content="Professional, custom websites built for small businesses in Texas. Fast, mobile-friendly, and affordable."
				/>
				<meta
					name="keywords"
					content="web design Richmond TX, texas website development, custom websites, small business websites"
				/>
				<meta name="author" content="Lone Star Code" />
				<meta
					property="og:title"
					content="Lone Star Code — Custom Web Development"
				/>
				<meta
					property="og:description"
					content="We build custom websites for small businesses in Texas."
				/>
				<meta
					property="og:image"
					content="/images/social-preview.png"
				/>
				<meta
					property="og:url"
					content="https://www.lonestarcode.net"
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</head>
			<body className={`${inter.variable} antialiased bg-stone-100`}>
				<header>
					<Header />
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
