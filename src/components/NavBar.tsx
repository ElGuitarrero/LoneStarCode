import Link from "next/link"


interface Opcion { 
    label: string
    link: string
    icono?: string
}

interface NavbarProps {
    behavior:boolean
    // size: number
}

const NavBar = ( {behavior}: NavbarProps ) => {
    

    const opciones:Opcion[] = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Projects",
            link: "/projects"
        },
        {
            label: "Pricing",
            link: "/pricing"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Contact",
            link: "/contact"
        }
    ]

    return (
        <nav className={`text-black ${behavior ? "fixed w-full sm:w-[75%] bg-stone-100" : "sticky w-full bg-stone-100"} top-0 z-50 `} style={{ fontFamily: 'var(--font-inter)' }}>
            {/* Opciones */}
            <ul className="flex flex-row justify-evenly px-3">
                {
                    opciones.map((opcion, index) => (
                        <Link href={opcion.link} key={index} className="py-4 px-2 sm:px-8 hover:inset-shadow-sm hover:outline transition duration-300">{opcion.label}</Link>
                        // <li key={index} className="p-2 ">{opcion.label}</li>
                    ))
                }
            </ul>
        </nav>
    )
}


export default NavBar;