"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="mb-6 block">
                            <Image
                                src="/hello.png"
                                alt="AeroGnix Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Defining the future of autonomous aerial robotics.
                            Defense-grade engineering for the world's most critical missions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6">Exploration</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Drones</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Technology</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Solutions</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Compliance</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} AeroGnix Systems. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
