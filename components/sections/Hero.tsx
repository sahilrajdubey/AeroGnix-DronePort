"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Placeholder for video - in production, replace with real <video> tag */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    suppressHydrationWarning
                    className="h-full w-full object-cover opacity-60"
                >
                    <source
                        src="https://videos.pexels.com/video-files/5198083/5198083-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-medium text-cyan-100 tracking-wide uppercase">
                            Next Gen Autonomy
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Dominate the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                            Skies Above.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                        Advanced autonomous drone systems for defense, industrial inspection, and critical infrastructure.
                        Engineered for reliability in the most demanding environments.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-base rounded-full bg-white text-black hover:bg-slate-200 w-full md:w-auto">
                            Explore Our Drones
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-white/20 hover:bg-white/10 text-white w-full md:w-auto gap-2 group">
                            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                            Watch Flight Demo
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
}
