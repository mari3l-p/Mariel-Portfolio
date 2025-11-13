"use client"

import { Award, ChevronDown, ChevronUp, CodeXml, FileCode, House, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navigation() {

    const [isOpen, setIsOpen] = useState<boolean>(true)

    const usePathName = usePathname()


    return (
        <div className="px-4 ">
            <div className="mt-5 text-2xl text-center text-(--gray)"><CodeXml/> MP</div>

            <ul id="nav-list" className="flex flex-col gap-14 mt-16">
                <li className={usePathName === '/' ? "hover-link" : "just-link"}><House /> <Link href="/">Inicio</Link></li>

                <div>
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer">
                        <FileCode /> Projects {isOpen ? <ChevronUp/>: <ChevronDown/>}
                    </div>
                    {isOpen && 
                        <div className="flex flex-col gap-5 pl-12 mt-5">
                            <li className={usePathName === '/freeCodeCamp' ? "hover-link" : "just-link"}><Link href="/freeCodeCamp">FreeCodeCamp</Link></li>
                            <li className={usePathName === '/daysJs' ? "hover-link" : "just-link"}><Link href="/daysJs">30 Days of JS</Link></li>
                            <li className={usePathName === '/react' ? "hover-link" : "just-link"}><Link href="/react">React</Link></li>
                            <li className={usePathName === '/instagramAnalizer' ? "hover-link" : "just-link"}><Link href="/instagramAnalizer">Instagram Analizer</Link></li>
                        </div>
                    }
                </div>

                <li className={usePathName === '/certificaciones' ? "hover-link" : "just-link"}><Award/> <Link href="/certificaciones">Certificaciones</Link></li>

                <li className={usePathName === '/contacto' ? "hover-link" : "just-link"}><Mail/> <Link href="/contacto">Contacto</Link></li>
            </ul>

        </div>
    )
}