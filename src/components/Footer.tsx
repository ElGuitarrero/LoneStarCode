// components/Footer.tsx

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-gray-100 py-12">
			<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
				{/* Company Info */}
				<div>
					<h3 className="text-lg font-semibold">Lone Star Code</h3>
					<p className="text-sm">
						Building scalable solutions from Texas to the world.
					</p>
				</div>

				{/* Links */}
				<div className="flex flex-col md:flex-row gap-4 text-sm">
					<a href="/about" className="hover:underline">
						About
					</a>
					<a href="/services" className="hover:underline">
						Services
					</a>
					<a href="/contact" className="hover:underline">
						Contact
					</a>
				</div>

				{/* Copyright */}
				<div className="text-xs text-gray-100">
					© {new Date().getFullYear()} Lone Star Code LLC. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
