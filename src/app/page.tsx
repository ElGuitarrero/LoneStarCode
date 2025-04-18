"use client";

import FadeInSection from "@/components/FadeInSection";
import Ejemplos from "@/components/Ejemplos";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<ServicesSection />
			<div className="bg-stone-100">
				<Ejemplos />
			</div>
			<FaqSection />
		</div>
	);
};

const HeroSection = () => {
	return (
		<section className="h-screen bg-[url('/images/fondo/fondoHero.webp')] sm:bg-fixed bg-cover bg-center max-sm:mb-12">
			<div className="backdrop-blur-md h-full w-full flex flex-col justify-center items-center px-6">
				<div className="text-center max-w-4xl">
					<FadeInSection>
						<h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
							Real Custom Websites, No Templates Allowed
						</h2>
					</FadeInSection>

					<FadeInSection>
						<p className="mt-4 text-lg sm:text-xl text-white font-semibold drop-shadow-md">
							We build everything from scratch to match your
							vision - fast, modern, and truly yours.
						</p>
					</FadeInSection>
					<FadeInSection>
						<Link href={"/contact"}>
							<button className="mt-6 px-8 py-3 bg-blue-300 text-black text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 hover:text-white cursor-pointer transition duration-300">
								Share Your Vision
							</button>
						</Link>
					</FadeInSection>
				</div>
			</div>
		</section>
	);
};

export default Home;
