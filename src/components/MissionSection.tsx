import FadeInSection from "./FadeInSection";

export default function MissionSection() {
	return (
		<section className="py-16 px-6 md:px-12 bg-[url('/images/fondo/mission.png')] lg:bg-fixed bg-cover bg-right md:bg-[center_70%] bg-stone-50 text-gray-800">
			<div className="max-w-5xl font-semibold sm:backdrop-blur-sm mx-auto p-6 rounded">
				<FadeInSection>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Our Mission
					</h2>
					<p className="text-lg leading-8">
						We believe local businesses deserve the same level of
						technology and care that big companies get.
					</p>
					<p className="text-lg leading-8 mt-4">
						Our mission is to help small businesses in Texas stand
						out online — with websites that are fast, easy to use,
						and built to grow. We keep things honest,
						straightforward, and personal — because your business
						deserves more than a generic template.
					</p>
					<p className="text-lg leading-8 mt-4">
						We are here to build{" "}
						<span className="font-semibold">real solutions</span>{" "}
						that support real people.
					</p>
				</FadeInSection>
			</div>
		</section>
	);
}
