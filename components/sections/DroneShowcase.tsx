"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const drones = [
    {
        id: 1,
        name: "AG-X1 Sentinel",
        category: "Surveillance & Recon",
        image: "/d4.jpeg",
        specs: ["45m Flight Time", "12km Range", "AI Object Detection"],
        description: "Long-range autonomous surveillance drone with thermal imaging and real-time edge processing."
    },
    {
        id: 2,
        name: "AG-H2 Heavy Lift",
        category: "Logistics & Transport",
        image: "/d5.jpeg",
        specs: ["25kg Payload", "Hybrid Power", "All-Weather"],
        description: "Heavy-lift multi-rotor designed for autonomous cargo delivery and industrial equipment transport."
    },
    {
        id: 3,
        name: "AG-S3 Mapper",
        category: "Mapping & Survey",
        image: "/d3.jpg", 
        specs: ["cm-level RTK", "100MP Camera", "LiDAR Ready"],
        description: "High-precision mapping drone capable of surveying vast areas with millimetric accuracy."
    }
];

export function DroneShowcase() {
    return (
        <section id="drones" className="py-32 bg-background relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for <span className="text-gradient-cyan">Superiority</span></h2>
                        <p className="text-muted-foreground text-lg">
                            Our fleet covers the entire spectrum of autonomous operations, from long-range surveillance to precision heavy lifting.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2 rounded-full border-none bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-white hover:text-cyan-400 shadow-lg shadow-black/20">
                        View All Models <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {drones.map((drone, index) => (
                        <Reveal key={drone.id} variant="fade-up" delay={index * 0.1} width="100%">
                            <div
                                className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 ring-1 ring-white/10 hover:ring-cyan-500/30"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />

                                    <Image
                                        src={drone.image}
                                        alt={drone.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white ring-1 ring-white/20">
                                            {drone.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{drone.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                                        {drone.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {drone.specs.map((spec) => (
                                            <span key={spec} className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground border border-border">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <Button className="w-full bg-muted hover:bg-cyan-500 hover:text-white text-foreground border-none group/btn transition-colors duration-300">
                                        View Specs
                                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Helper icon
function ChevronRight({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
}
