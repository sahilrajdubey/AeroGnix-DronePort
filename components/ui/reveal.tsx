"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    variant?: "fade-up" | "fade-in" | "blur-in" | "scale-in";
    className?: string;
    once?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    variant = "fade-up",
    className = "",
    once = true,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else if (!once) {
            // Optional: reset if not once
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, once]);

    const variants: Record<string, { hidden: Variant; visible: Variant }> = {
        "fade-up": {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "blur-in": {
            hidden: { opacity: 0, filter: "blur(20px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
        },
        "scale-in": {
            hidden: { opacity: 0, transform: "scale(0.8)" },
            visible: { opacity: 1, transform: "scale(1)" },
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
