"use client";

import FadeInSection from "./FadeInSection";

interface Ejemplo {
	titulo: string;
	imagen: string;
	descripcion: string;
	link?: string;
}

const ejemplos: Ejemplo[] = [
	{
		titulo: "Daniel Etienne Website",
		imagen: "/images/projects/daniel.png",
		descripcion:
			"We create sleek, high-performance websites that elevate your brand, drive engagement, and increase bookings, just like we did for Daniel Etienne.",
		link: "https://www.danieletienne.com/",
	},
	{
		titulo: "Oracle Careers",
		imagen: "/images/projects/oracle.png",
		descripcion:
			"Our experience leading improvements on major platforms like Oracle Careers helps us design faster, smoother, and more user-friendly websites for businesses of any size.",
		link: "https://www.oracle.com/careers/",
	},
	{
		titulo: "True Texas Shine",
		imagen: "/images/projects/texasshine.png",
		descripcion:
			"We help local businesses like True Texas Shine establish a strong, professional online presence that attracts new clients and grows brand trust.",
		// link: "https://example.com/proyecto3"
	},
];

const MostrarEjemplo = ({ titulo, imagen, descripcion, link }: Ejemplo) => {
	return (
		<FadeInSection>
			<div
				className={`h-[70vh] sm:h-[50vh] flex flex-col sm:flex-row w-full bg-white text-black`}
			>
				<div
					className={`basis-1/2 bg-stone-100 flex justify-center items-center`}
				>
					<div
						className={`w-full sm:w-[80%] h-full sm:h-[80%] rounded bg-cover bg-center`}
						style={{ backgroundImage: `url(${imagen})` }}
					></div>
				</div>

				<div
					className={`basis-1/2 bg-stone-100 flex justify-center items-center`}
				>
					<div className="w-[100%] flex flex-col justify-around h-full sm:h-[80%] max-sm:px-5 pr-5 py-4">
						<p className="text-3xl sm:text-4xl lg:text-5xl">
							{titulo}
						</p>
						<p className="text-base sm:text-xl">{descripcion}</p>

						<div className="mt-4">
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button
									className={`${
										link ? "" : "hidden"
									} max-sm:w-full px-4 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700`}
								>
									Visit {titulo}
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</FadeInSection>
	);
};

const Ejemplos = () => {
	return (
		<div>
			{ejemplos.map((item, index) => (
				<MostrarEjemplo {...item} key={index} />
			))}
		</div>
	);
};

export default Ejemplos;
