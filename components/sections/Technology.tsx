"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Scan, Shield, Wifi, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const features = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Edge Computing",
        description: "On-board NVIDIA Jetson Orin modules for real-time AI processing."
    },
    {
        icon: <Scan className="w-8 h-8" />,
        title: "LiDAR Mapping",
        description: "360° obstacle avoidance and cm-level SLAM capability."
    },
    {
        icon: <Radio className="w-8 h-8" />,
        title: "Long Range Link",
        description: "AES-256 encrypted datalink with 15km+ operational range."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Smart Battery",
        description: "Self-heating intelligent power management for arctic operations."
    },
    {
        icon: <Wifi className="w-8 h-8" />,
        title: "Swarm Ready",
        description: "Mesh networking allows for collaborative multi-drone missions."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Cyber Hardened",
        description: "Anti-jamming GPS and spoofing protection."
    }
];

export function Technology() {
    return (
        <section id="technology" className="py-24 bg-card relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Autonomy <span className="text-muted-foreground">&</span> Intelligence.</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our drones are more than flying cameras. They are autonomous flying computers equipped with state-of-the-art sensors and processing power.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Lines (Decorative) - Adaptive Opacity */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 opacity-30" />
                    <div className="hidden lg:block absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 opacity-30" />

                    {features.map((feature, index) => (
                        <Reveal key={feature.title} variant="scale-in" delay={index * 0.1}>
                            <div
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors z-10 h-full hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5 duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-500 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
