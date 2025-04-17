import FadeInSection from "./FadeInSection";

export default function PricingSection() {
	return (
		<section className="bg-stone-100 pt-5 pb-16" id="pricing">
			<div className="max-w-7xl text-black mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
				<p className="text-gray-600 mb-12">
					Simple, transparent pricing. Choose the package that fits your needs.
				</p>

				<div className="grid gap-8 md:grid-cols-3">
					<FadeInSection>
						{/* Basic Plan */}
						<div className="border h-full rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col">
							<div>
								<h3 className="text-xl font-semibold mb-4">Basic</h3>
								<p className="text-4xl font-bold mb-4">$299</p>
								<ul className="text-gray-600 mb-8 space-y-2">
									<li>One-page website</li>
									<li>Responsive design</li>
									<li>Contact form</li>
									<li>Delivery in 5-7 days</li>
								</ul>
							</div>
							<a
								href="/contact"
								className="mt-auto inline-block bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
							>
								Get Started
							</a>
						</div>
					</FadeInSection>

					<FadeInSection>
						{/* Standard Plan */}
						<div className="border-2 h-full border-yellow-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition flex flex-col">
							<div>
								<h3 className="text-xl font-semibold mb-4">Standard</h3>
								<p className="text-4xl font-bold mb-4">$899</p>
								<ul className="text-gray-600 mb-8 space-y-2">
									<li>Multi-page website (up to 7 pages)</li>
									<li>Responsive design</li>
									<li>Contact forms + integrations*</li>
									<li>Basic SEO optimization</li>
									<li>Delivery in 7-10 days</li>
								</ul>
							</div>
							<a
								href="/contact"
								className="mt-auto inline-block bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
							>
								Get Started
							</a>
						</div>
					</FadeInSection>

					<FadeInSection>
						{/* Premium Plan */}
						<div className="border h-full rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col">
							<div>
								<h3 className="text-xl font-semibold mb-4">Premium</h3>
								<p className="text-4xl font-bold mb-4">Custom Quote</p>
								<ul className="text-gray-600 mb-8 space-y-2">
									<li>Custom design & development</li>
									<li>Advanced integrations*</li>
									<li>SEO & Analytics setup</li>
									<li>Priority support</li>
									<li>Delivery time based on scope</li>
								</ul>
							</div>
							<a
								href="/contact"
								className="mt-auto inline-block bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
							>
								Contact Us
							</a>
						</div>
					</FadeInSection>
				</div>

				{/* Integrations note */}
				<p className="text-sm text-gray-500 mt-8 max-w-2xl mx-auto max-sm:mt-5">
					* Integrations refer to connecting your website with tools like email marketing platforms, CRM systems, booking forms, payment gateways, and more — helping you automate and grow your business.
				</p>

			</div>
		</section>
	);
}