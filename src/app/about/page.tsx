"use client";

import FadeInSection from "@/components/FadeInSection";
import MissionSection from "@/components/MissionSection";

export default function About() {
	return (
		<div className="bg-stone-100">
			<AboutSection />
			<MissionSection />
		</div>
	);
}

function AboutSection() {
	return (
		<section className="flex flex-col-reverse sm:flex-row items-center min-h-screen sm:min-h-[70vh] w-full px-4 py-10 gap-5">
			<div className="flex flex-col justify-center sm:w-1/2">
				<FadeInSection>
					<AboutText />
				</FadeInSection>
			</div>

			<div className="flex justify-center sm:w-1/2 w-full">
				<div className="bg-[url('/images/fondo/trabajando.png')] bg-cover bg-center min-h-[300px] sm:min-h-[400px] w-full sm:w-[90%] rounded" />
			</div>
		</section>
	);
}

function AboutText() {
	const paragraphStyles =
		"text-black text-xl text-center px-2 lg:pl-20 mb-8 last:mb-0";

	return (
		<div className="flex flex-col">
			<p className={paragraphStyles}>
				<strong>
					At Lone Star Code, we build fast, clean, and reliable
					websites.
				</strong>
			</p>

			<p className={paragraphStyles}>
				<strong>
					Our team is led by a developer with real-world experience at
					Oracle
				</strong>
				, where he helped build scalable systems used by{" "}
				<strong>millions of people.</strong> Now, we are bringing that
				same level of quality to{" "}
				<strong>small and local businesses</strong> — without the big
				agency pricing or complications.
			</p>

			<p className={paragraphStyles}>
				<strong>
					We are based in Richmond, Texas, and we work directly with
					our clients to keep things simple, clear, and focused on
					results.
				</strong>
			</p>
		</div>
	);
}
