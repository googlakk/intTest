import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const springValue = useSpring(0, { duration: 3000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => Math.round(current));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        // Sync motion value to state for rendering
        const unsubscribe = displayValue.on("change", (latest) => {
            setDisplay(latest);
        });
        return () => unsubscribe();
    }, [displayValue]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
                <motion.span
                    className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 block leading-tight"
                >
                    {display}{suffix}
                </motion.span>
            </div>
            <span className="text-slate-500 font-medium tracking-wide mt-4 uppercase text-sm">{label}</span>
        </div>
    );
};

export const Highlights = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Counter value={5000} label="Square Meters Campus" suffix="+" />
                    <Counter value={98} label="Graduates University Entry" suffix="%" />
                    <Counter value={120} label="Expert Teachers" suffix="" />
                </div>
            </div>
        </section>
    );
};
