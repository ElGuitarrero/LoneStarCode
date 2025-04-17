// components/ServicesSection.tsx

import { FaLaptopCode, FaMobileAlt, FaSearch, FaCogs } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

export default function ServicesSection() {
	return (
		<section
			className="bg-stone-100 sm:border-b-1 sm:pt-10 pb-16"
			id="services"
		>
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4 text-black">
					Our Services
				</h2>
				<p className="text-gray-600 mb-12">
					We build modern, scalable websites and digital solutions to
					help your business grow.
				</p>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Service 1 */}
					<FadeInSection>
						<div className="h-full flex flex-col items-center p-6 border hover:border-yellow-600 rounded-2xl shadow hover:shadow-lg transition">
							<FaLaptopCode className="text-yellow-600 text-5xl mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-black">
								Website Development
							</h3>
							<p className="text-gray-600 text-sm">
								Custom-built websites optimized for speed, SEO,
								and responsiveness.
							</p>
						</div>
					</FadeInSection>

					{/* Service 2 */}
					<FadeInSection>
						<div className="h-full flex flex-col items-center p-6 border hover:border-yellow-600 rounded-2xl shadow hover:shadow-lg transition">
							<FaMobileAlt className="text-yellow-600 text-5xl mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-black">
								Mobile Optimization
							</h3>
							<p className="text-gray-600 text-sm">
								Ensure your website looks great and performs
								perfectly on all devices.
							</p>
						</div>
					</FadeInSection>

					{/* Service 3 */}
					<FadeInSection>
						<div className="h-full flex flex-col items-center p-6 border hover:border-yellow-600 rounded-2xl shadow hover:shadow-lg transition">
							<FaSearch className="text-yellow-600 text-5xl mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-black">
								SEO Essentials
							</h3>
							<p className="text-gray-600 text-sm">
								Basic SEO setup to help your business rank
								higher and get noticed online.
							</p>
						</div>
					</FadeInSection>

					{/* Service 4 */}
					<FadeInSection>
						<div className="h-full flex flex-col items-center p-6 border hover:border-yellow-600 rounded-2xl shadow hover:shadow-lg transition">
							<FaCogs className="text-yellow-600 text-5xl mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-black">
								Integrations
							</h3>
							<p className="text-gray-600 text-sm">
								Contact forms, CRM connections, analytics setup,
								and more.
							</p>
						</div>
					</FadeInSection>
				</div>
			</div>
		</section>
	);
}
