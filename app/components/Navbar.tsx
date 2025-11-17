"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Navigation from "./Navigation"

export default function Navbar() {

    const [open, setOpen] = useState<boolean>(false)

    // Lock body scroll when the menu is open
    useEffect(() => {
        const prev = typeof document !== 'undefined' ? document.body.style.overflow : ''
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = prev || ''
        }
        return () => {
            if (typeof document !== 'undefined') document.body.style.overflow = prev || ''
        }
    }, [open])

    return(
        <>
            <header className="md:hidden flex">
                {!open && <div className="bg-(--dark-) text-(--white) p-2 rounded-lg fixed"><button className="m-0 p-0" onClick={() => setOpen(true)} ><Menu className="text-center m-0"/></button></div>}

                {open && 
                    // Fullscreen fixed overlay so background can't be scrolled or interacted with
                    <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
                        {/* semi-transparent backdrop */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* sidebar panel — stopPropagation so clicks inside don't close it */}
                        <aside className="fixed  w-64 h-screen flex flex-col p-4 bg-[#171924] z-50" onClick={(e) => e.stopPropagation()}>

                            <button 
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-(--gray)"
                            ><X /></button>

                            <Navigation />
                        </aside>
                    </div>
                }

            </header>
        </>
    )
}