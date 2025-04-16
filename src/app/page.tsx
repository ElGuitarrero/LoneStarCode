"use client";

import NavBar from "@/components/NavBar";
import FadeInSection from "@/components/FadeInSection";
import { useState, useEffect } from "react";
import Ejemplos from "@/components/Ejemplos";


const Home = () => {
	// useLocoScroll();

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<Header scrollY={scrollY} />

			<HeroSection />

			<div className="bg-stone-100">
        <Ejemplos />

      </div>
		</div>
	);
};

const Header = ({ scrollY }: { scrollY: number }) => {
	const isSticky =
		typeof window !== "undefined" && scrollY > window.innerHeight * 0.2;

	return (
		<header
			className="flex max-sm:pt-7 flex-col sm:flex-row h-60 w-full bg-stone-100 text-black"
			style={{ fontFamily: "var(--font-inter)" }}
		>
			{/* Star spinner */}
			<div className={`basis-1/4`}>
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
						} bg-[url('/images/estrella.png')] bg-contain  rounded-full `}
						style={{ animationDuration: "10s" }}
					/>
				</div>
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

const HeroSection = () => {
	return (
		<section className="h-screen bg-[url('/images/fondo/fondoHero.png')] bg-cover bg-center">
			<div className="backdrop-blur-md h-full w-full flex flex-col justify-center items-center px-6">
				<div className="text-center max-w-4xl">
					<FadeInSection>
						<h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
							Empowering Your Vision, Elevating Your Business
						</h2>
					</FadeInSection>

					<FadeInSection>
						<p className="mt-4 text-lg sm:text-xl text-white font-semibold drop-shadow-md">
							Let us help you bring your ideas to life with
							innovative solutions and professional expertise.
						</p>
					</FadeInSection>

					<FadeInSection>
						<button className="mt-6 px-8 py-3 bg-blue-300 text-black text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 hover:text-white cursor-pointer transition duration-300">
							Share Your Vision
						</button>
					</FadeInSection>
				</div>
			</div>
		</section>
	);
};

export default Home;
