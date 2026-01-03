import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-slate-900"
            >
                {/* Placeholder for Video - In production use a <video> tag */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="School Campus"
                    className="w-full h-full object-cover opacity-80"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-sm mb-6 font-medium tracking-wide">
                        WELCOME TO INTELLECT PRO
                    </span>
                </motion.div>

                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                    >
                        School of Future
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
                        className="text-4xl md:text-6xl font-light text-white/90 mt-2"
                    >
                        in Bishkek
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-8"
                >
                    <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Tour
                        </span>
                        <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 opacity-10" />
                    </button>
                </motion.div>
            </div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
            >
                <ArrowDown size={32} />
            </motion.div>
        </div>
    );
};
