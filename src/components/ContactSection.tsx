// components/ContactSection.tsx

export default function ContactSection() {



	return (
		<section className="bg-stone-100 pt-10 pb-16" id="contact">
			<div className="max-w-2xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4 text-black">
					Get in Touch
				</h2>
				<p className="text-gray-600 mb-8">
					We would love to hear about your project! Fill out the form
					and we will get back to you soon.
				</p>

				<form
					action="https://formspree.io/f/{your_form_id}" // <-- reemplazar por tu endpoint
					method="POST"
					className="space-y-6 text-gray-500"
				>
					<div>
						<input
							type="text"
							name="name"
							required
							placeholder="Name"
							className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
						/>
					</div>

					<div>
						<input
							type="tel"
							name="cellphone"
							required
							placeholder="Phone number"
							className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
						/>
					</div>

					<div>
						<input
							type="email"
							name="email"
							required
							placeholder="Email"
							className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
						/>
					</div>

					<div className="">
						<select
							name="service"
							required
							className="max-sm:h-13 bg-stone-100 w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
						>
							<option value="">Select a Service</option>
							<option value="Website Design">
								Website Design
							</option>
							<option value="E-commerce">E-commerce</option>
							<option value="SEO Optimization">
								SEO Optimization
							</option>
							<option value="Custom Project">
								Custom Project
							</option>
							<option value="Other">Other</option>
						</select>
					</div>

					<div>
						<select
							name="package"
							required
							className="max-sm:h-13 w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
						>
							<option value="">Select a Package</option>
							<option value="Basic">Basic - $299</option>
							<option value="Standard">Standard - $899</option>
							<option value="Premium">
								Premium - Custom Quote
							</option>
						</select>
					</div>

					<div>
						<textarea
							name="message"
							rows={5}
							required
							placeholder="Your Message"
							className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full"
					>
						Send Message
					</button>

					<div className="mt-6 text-sm text-gray-600">
						Or email us at{" "}
						<a
							href="mailto:info@lonestarcode.org"
							className="text-yellow-600 hover:underline"
						>
							info@lonestarcode.org
						</a>
					</div>
				</form>
			</div>
		</section>
	);
}
