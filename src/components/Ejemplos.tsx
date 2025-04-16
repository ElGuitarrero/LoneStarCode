'use client'

import FadeInSection from "./FadeInSection";


interface Ejemplo {
    titulo: string
    imagen: string
    descripcion: string,
    link?: string
}

const ejemplos: Ejemplo[] = [
    {
        titulo: "Proyecto 1",
        imagen: "/images/proyecto1.jpg",
        descripcion: "Este es un ejemplo de descripción para el Proyecto 1.",
        link: "https://example.com/proyecto1"
    },
    {
        titulo: "Proyecto 2",
        imagen: "/images/proyecto2.jpg",
        descripcion: "Este es un ejemplo de descripción para el Proyecto 2."
    },
    {
        titulo: "Proyecto 3",
        imagen: "/images/proyecto3.jpg",
        descripcion: "Este es un ejemplo de descripción para el Proyecto 3.",
        link: "https://example.com/proyecto3"
    }
];


const MostrarEjemplo = ({ titulo, imagen, descripcion, link }: Ejemplo) => {


    return(
        <FadeInSection>
            <div className={`h-[50vh] flex flex-col sm:flex-row w-full bg-white text-black`}>
            
            <div className={`basis-1/2 bg-stone-100 flex justify-center items-center`}>
                <div className="w-full sm:w-[80%] h-full sm:h-[80%] rounded bg-[url('/images/mockup.png')] bg-cover bg-center">

                </div>

            </div>

            <div className={`basis-1/2 bg-stone-100 flex justify-center items-center`}>
                <div className="w-[100%] sm:h-[80%] max-sm:px-5 py-4">
                    <p className="text-5xl">{titulo}</p>
                    <p className="text-xl">{descripcion}</p>

                    {link ? (
                        <p>Visit this project: <a href={link}>{titulo}</a></p>
                    ) : ""}
                </div>
            </div>

            
        </div>
        </FadeInSection>
    )
}

const Ejemplos = () => {



    return (
        <div>
            {ejemplos.map((item,index) => (
                <MostrarEjemplo {...item} key={index} />
            ))}
        </div>
    )
}

export default Ejemplos;