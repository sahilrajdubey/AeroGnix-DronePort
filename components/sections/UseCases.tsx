"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const cases = [
    {
        title: "Critical Infrastructure",
        category: "Inspection",
        description: "Automated inspection of power lines, wind turbines, and bridges with millimeter-level defect detection."
    },
    {
        title: "Border Security",
        category: "Surveillance",
        description: "24/7 autonomous perimeter monitoring with thermal identification and automated alerts."
    },
    {
        title: "Search & Rescue",
        category: "Emergency",
        description: "Rapid deployment thermal scanning to locate missing persons in difficult terrain."
    }
];

export function UseCases() {
    return (
        <section id="solutions" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <h2 className="text-4xl font-bold mb-6">Mission Critical <br />Applications.</h2>
                        <p className="text-muted-foreground mb-8">
                            From industrial automation to national defense, our systems are deployed where failure is not an option.
                        </p>
                        <Button variant="outline" className="border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10">
                            Explore Industry Solutions
                        </Button>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-8">
                        {cases.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative h-[300px] rounded-2xl overflow-hidden bg-card border border-border"
                            >
                                {/* Background Image Placeholder */}
                                <div className="absolute inset-0 bg-muted group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-cyan-500 text-xs font-bold tracking-wider uppercase mb-2 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground max-w-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
