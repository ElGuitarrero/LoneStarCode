"use client";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isSticky =
		typeof window !== "undefined" && scrollY > window.innerHeight * 0.2;

	return (
		<header
			className="max-sm:mb-12 flex max-sm:pt-7 flex-col sm:flex-row h-60 w-full bg-stone-100 text-black"
			style={{ fontFamily: "var(--font-inter)" }}
		>
			{/* Star spinner */}
			<div className={`basis-1/4`}>
				<Link href={"/"}>
					<div
						className={`${
							isSticky
								? "sm:fixed w-[25%] py-2 z-50 bg-stone-100"
								: "h-full"
						} flex justify-center items-center`}
					>
						<div
							className={`${
								isSticky ? "w-10 h-10" : "w-40 h-40"
							} bg-[url('/images/estrella.webp')] bg-contain  rounded-full `}
							style={{ animationDuration: "10s" }}
						/>
					</div>
				</Link>
			</div>

			{/* Title + Nav */}
			<div
				className={`basis-3/4 flex flex-col justify-center items-center`}
			>
				<h1 className="text-5xl sm:text-7xl text-center">
					Lone Star Code
				</h1>
				<NavBar behavior={isSticky} />
			</div>
		</header>
	);
};

export default Header;
