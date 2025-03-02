"use client";

import { Search, ShoppingCart, Truck, User } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "../themeToggle"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const logoSrc = theme === "dark" ? "/logo/logo-dark.png" : "/logo/logo-light.png"

    return (
        <div className="border-b border-gray-300">
            <nav className="container mx-auto flex justify-between items-center p-3 font-medium">
                <div>
                    <Image src={logoSrc} width={100} height={100} alt="Logo" />
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-10 font-medium">
                        <Link href="/"><li className="rounded-sm px-3 py-1 hover:bg-neutral-100">Nacionais</li></Link>
                        <Link href="/"><li className="rounded-sm px-3 py-1 hover:bg-neutral-100">Europeias</li></Link>
                        <Link href="/"><li className="rounded-sm px-3 py-1 hover:bg-neutral-100">Seleções</li></Link>
                        <Link href="/"><li className="rounded-sm px-3 py-1 hover:bg-neutral-100">Retrô</li></Link>
                        <Link href="/"><li className="rounded-sm px-3 py-1 hover:bg-neutral-100">Especiais</li></Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-8">
                        <Link href="/"><li><Search /></li></Link>
                        <Link href="/"><li><Truck /></li></Link>
                        <Link href="/"><li><User /></li></Link>
                        <Link href="/"><li><ShoppingCart /></li></Link>
                        <li><ThemeToggle /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
