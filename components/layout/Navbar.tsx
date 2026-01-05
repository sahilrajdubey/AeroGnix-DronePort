"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Drones", href: "#drones" },
        { name: "Technology", href: "#technology" },
        { name: "Solutions", href: "#solutions" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav
            className="fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/10 shadow-lg bg-white/70 dark:bg-black/60 backdrop-blur-md transition-all duration-300"
        >
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/hello.png"
                        alt="AeroGnix Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-full transition-all duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">

                    <Button variant="ghost" className="text-foreground hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                        Log In
                    </Button>
                    <Button className="rounded-full px-6 bg-cyan-500 hover:bg-cyan-600 text-white border-0">
                        Contact Sales
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full lg:hidden left-0 right-0 mt-2 p-4 rounded-2xl border border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-[1px] bg-border my-2" />

                    <Button variant="outline" className="w-full rounded-xl">
                        Log In
                    </Button>
                    <Button className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white">Contact Sales</Button>
                </div>
            )}
        </nav>
    );
}
