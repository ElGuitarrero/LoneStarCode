import { useEffect, useState } from "react"

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
    const [x, setX] = useState<string>("")
    
    useEffect(() => {
        setX(String(behavior))
    })

    const opciones:Opcion[] = [
        {
            label: "Home",
            link: "#",
        },
        {
            label: "Proyectos",
            link: "#"
        },
        {
            label: "About",
            link: "#"
        },
        {
            label: "Contact",
            link: "#"
        }
    ]

    return (
        <nav className={`text-black ${behavior ? "fixed w-full sm:w-[75%] bg-stone-100" : "sticky w-full bg-stone-100"} top-0 z-50 `} style={{ fontFamily: 'var(--font-inter)' }}>
            {/* Opciones */}
            <ul className="flex flex-row justify-evenly px-3 py-2">
                {
                    opciones.map((opcion, index) => (
                        <li key={index} className="p-2 ">{opcion.label}</li>
                    ))
                }
            </ul>
        </nav>
    )
}


export default NavBar;