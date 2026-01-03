import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Heart, User, Sparkles } from 'lucide-react';

const Circle = ({
    title,
    desc,
    icon: Icon,
    colorClass,
    positionClass,
    style,
    isHovered,
    onHover,
    onLeave
}: {
    title: string;
    desc: string;
    icon: any;
    colorClass: string;
    positionClass: string;
    style?: any;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) => {
    return (
        <motion.div
            style={style}
            animate={{
                scale: isHovered ? 1.05 : 1,
                opacity: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
            className={`absolute w-64 h-64 md:w-80 md:h-80 rounded-full backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-6 text-center shadow-xl cursor-default ${colorClass} ${positionClass}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Counter-rotate content to keep it upright while parent rotates */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-col items-center justify-center w-full h-full"
            >
                <div className="mb-4 text-white/90">
                    <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">{desc}</p>
            </motion.div>
        </motion.div>
    );
};

export const GoldenTriangle = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Scroll Sync Transforms
    // 0 -> 0.6: Convergence
    // 0.6 -> 1.0: Holding/Rotating

    // Top Circle (Student)
    const studentY = useTransform(scrollYProgress, [0, 0.6], ["-150%", "0%"]);
    const studentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Left Circle (School)
    const schoolX = useTransform(scrollYProgress, [0, 0.6], ["-150%", "0%"]);
    const schoolY = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);
    const schoolOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Right Circle (Parents)
    const parentsX = useTransform(scrollYProgress, [0, 0.6], ["150%", "0%"]);
    const parentsY = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);
    const parentsOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Center Glow
    const centerScale = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const centerOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-slate-900">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Background Ambience */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    style={{ opacity: schoolOpacity }} // Fade in title early
                    className="text-center mb-8 md:mb-16 relative z-10 max-w-3xl mx-auto px-4 translate-y-[-5vh]"
                >
                    <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Partnership Model</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Golden Triangle</h2>
                </motion.div>

                <div className="relative w-full max-w-[800px] aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">

                    {/* Rotating Container for the Circles */}
                    <motion.div
                        className="relative w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Student (Top Center) - Initial Position Relative to rotated container needs to be forming a triangle 
                            Actually, if we rotate the container, "Top" becomes "Right" etc.
                            To maintain the "Triangle" shape rotating:
                            We place them at 0, 120, 240 degrees?
                            Or we just place them relative to proper top/left/right and rotate the whole group.
                        */}

                        {/* Student (Top Center) */}
                        <Circle
                            title="Student"
                            desc="Talent, Diligence, Leadership."
                            icon={User}
                            colorClass="bg-gradient-to-br from-teal-500/40 to-emerald-600/40 hover:from-teal-500/60 hover:to-emerald-600/60"
                            positionClass="top-0 left-1/2 -translate-x-1/2 z-20"
                            // Apply Scroll Transform relative to its final position
                            // Since it's inside a rotating div, transforms might act weird if not careful.
                            // But here we want the "Convergence" to happen radially.
                            // Simplest: The container rotates, but the ITEMS translate from 'far' to '0'.
                            style={{ y: studentY, opacity: studentOpacity }}
                            isHovered={hoveredCircle === 'student' || hoveredCircle === null}
                            onHover={() => setHoveredCircle('student')}
                            onLeave={() => setHoveredCircle(null)}
                        />

                        {/* School (Bottom Left) */}
                        <Circle
                            title="School"
                            desc="Methodology, Innovation, Guidance."
                            icon={BookOpen}
                            colorClass="bg-gradient-to-br from-blue-600/40 to-indigo-700/40 hover:from-blue-600/60 hover:to-indigo-700/60"
                            positionClass="bottom-[10%] left-[5%] md:left-[10%] z-10"
                            style={{ x: schoolX, y: schoolY, opacity: schoolOpacity }}
                            isHovered={hoveredCircle === 'school' || hoveredCircle === null}
                            onHover={() => setHoveredCircle('school')}
                            onLeave={() => setHoveredCircle(null)}
                        />

                        {/* Parents (Bottom Right) */}
                        <Circle
                            title="Parents"
                            desc="Support, Values, Engagement."
                            icon={Heart}
                            colorClass="bg-gradient-to-br from-rose-500/40 to-purple-600/40 hover:from-rose-500/60 hover:to-purple-600/60"
                            positionClass="bottom-[10%] right-[5%] md:right-[10%] z-10"
                            style={{ x: parentsX, y: parentsY, opacity: parentsOpacity }}
                            isHovered={hoveredCircle === 'parents' || hoveredCircle === null}
                            onHover={() => setHoveredCircle('parents')}
                            onLeave={() => setHoveredCircle(null)}
                        />
                    </motion.div>

                    {/* Center Intersection - Static in center (doesn't rotate with the group? Or does it?) 
                        If it's "Successful Future", it stays in center.
                    */}
                    <motion.div
                        style={{ scale: centerScale, opacity: centerOpacity }}
                        animate={{ boxShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 60px rgba(255,255,255,0.6)", "0 0 20px rgba(255,255,255,0.2)"] }}
                        // @ts-ignore
                        transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full z-30 flex items-center justify-center pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <Sparkles className="text-yellow-300 mb-2" size={32} />
                            <span className="text-white font-bold text-lg md:text-xl leading-tight text-shadow-lg">
                                Successful<br />Future
                            </span>
                        </div>
                    </motion.div>

                </div>

                {/* Mobile Spacer */}
                {/* <div className="h-20 md:hidden" /> */}

            </div>
        </section>
    );
};

