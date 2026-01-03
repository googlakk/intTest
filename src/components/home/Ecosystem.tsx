import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FloatingCard = ({ delay, x, y, children }: { delay: number, x: number, y: number, children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
            y: [0, -15, 0],
        }}
        // @ts-ignore - framer-motion types sometimes complain about infinity
        transition={{
            duration: 0.8,
            delay,
            y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay * 2
            },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
        }}
        style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
        }}
        className="absolute z-10"
    >
        {children}
    </motion.div>
);

export const Ecosystem = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the central building
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Mouse parallax logic
    const xSpring = useSpring(0, { stiffness: 50, damping: 20 });
    const ySpring = useSpring(0, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10
        const y = (clientY / innerHeight - 0.5) * 20;
        xSpring.set(x);
        ySpring.set(y);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[600px] md:min-h-[800px] w-full bg-gradient-to-b from-white to-orange-50 overflow-hidden py-20 md:py-32 flex items-center justify-center cursor-default"
        >
            <div className="text-center absolute top-10 md:top-20 z-20 w-full px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                >
                    The Ecosystem of Growth
                </motion.h2>
                <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto">
                    Intellect Pro is the hub where academics, creativity, and community converge.
                </p>
            </div>

            {/* Central Isometric School */}
            <motion.div
                style={{ y, rotateX: ySpring, rotateY: xSpring }} // Simple 3D tilt effect
                className="relative z-0 w-full max-w-[350px] md:max-w-[600px] aspect-square"
            >
                <img
                    src="/isometric_school.png?v=new2"
                    alt="School Ecosystem Hub"
                    className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                />
            </motion.div>

            {/* Floating Orbits - Adjusted for responsive visibility */}

            {/* 1. Academics Card (Top Left) */}
            <FloatingCard delay={0} x={10} y={25}>
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl w-36 md:w-48 hover:scale-110 transition-transform cursor-pointer">
                    <div className="h-16 md:h-24 bg-blue-100 rounded-lg md:rounded-xl mb-2 md:mb-3 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full" alt="Science" />
                    </div>
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Science Labs</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Practical Experiments</p>
                </div>
            </FloatingCard>

            {/* 2. Sports (Right) */}
            <FloatingCard delay={0.5} x={65} y={35}>
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl w-36 md:w-48 hover:scale-110 transition-transform cursor-pointer">
                    <div className="h-16 md:h-24 bg-green-100 rounded-lg md:rounded-xl mb-2 md:mb-3 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full" alt="Sports" />
                    </div>
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Active Life</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Team Spirit</p>
                </div>
            </FloatingCard>

            {/* 3. Community (Bottom Left) */}
            <FloatingCard delay={1} x={15} y={60}>
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl w-36 md:w-48 hover:scale-110 transition-transform cursor-pointer">
                    <div className="h-16 md:h-24 bg-orange-100 rounded-lg md:rounded-xl mb-2 md:mb-3 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full" alt="Community" />
                    </div>
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Community</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Events & Festivals</p>
                </div>
            </FloatingCard>

            {/* 4. Innovation (Bottom Right) */}
            <FloatingCard delay={1.5} x={60} y={65}>
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl w-36 md:w-48 hover:scale-110 transition-transform cursor-pointer">
                    <div className="h-16 md:h-24 bg-purple-100 rounded-lg md:rounded-xl mb-2 md:mb-3 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full" alt="Robotics" />
                    </div>
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Robotics</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Future Tech</p>
                </div>
            </FloatingCard>

        </section>
    );
};
