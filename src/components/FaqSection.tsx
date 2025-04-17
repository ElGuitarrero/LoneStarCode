// components/FaqSection.tsx
"use client";

import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function FaqSection() {
	return (
		<section className="bg-stone-100 py-16" id="faq">
			<div className="max-w-4xl mx-auto px-4 text-black text-center">
				<h2 className="text-3xl font-bold mb-10">
					Frequently Asked Questions
				</h2>

				<div className="space-y-8 text-left">
					<FadeInSection>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								How long does it take to build a website?
							</h3>
							<p className="text-gray-600">
								Most projects are completed within 7–10 business
								days, depending on the package and requirements.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Do you offer hosting and domain services?
							</h3>
							<p className="text-gray-600">
								Yes, we can handle your hosting and domain setup
								to make the process seamless.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Can I update my website later?
							</h3>
							<p className="text-gray-600">
								Absolutely. We build websites that are easy to
								update and scalable as your business grows.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								What if I need help after the site is live?
							</h3>
							<p className="text-gray-600">
								We offer maintenance plans and on-demand support
								to help you keep your site running smoothly.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection>
						<div className="mt-12 text-center">
							<h3 className="text-2xl font-bold mb-4 text-black">
								Still have questions?
							</h3>
							<p className="text-gray-600 mb-6">
								Let{"'"}s chat about your project and how we can
								help bring it to life.
							</p>
							<Link
								href="/contact"
								className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
							>
								Get Started
							</Link>
						</div>
					</FadeInSection>
				</div>
			</div>
		</section>
	);
}
