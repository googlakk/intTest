import { motion } from 'framer-motion';

export const Intro = () => {
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.08 } },
                        hidden: {}
                    }}
                    className="text-2xl md:text-4xl font-medium leading-relaxed text-slate-800"
                >
                    {"We don’t just prepare specific exams. ".split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                            }}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br className="hidden md:block" />
                    {"We shape successful personalities".split(" ").map((word, i) => (
                        <motion.span
                            key={`highlight-${i}`}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                            }}
                            className="inline-block mr-[0.25em] text-blue-600 font-semibold"
                        >
                            {word}
                        </motion.span>
                    ))}
                    {"by combining deep academic knowledge with vital soft skills.".split(" ").map((word, i) => (
                        <motion.span
                            key={`last-${i}`}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                            }}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-slate-500"
                >
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-2 shadow-sm border border-slate-100 relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 bg-[url('/circuit-oyu.svg')] bg-cover bg-center"></div>
                            <span className="text-2xl relative z-10">🇰🇬</span>
                        </div>
                        <span className="uppercase tracking-widest text-xs font-bold text-[#0A192F]">Traditions</span>
                    </div>
                    <div className="w-px h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-2 shadow-sm border border-slate-100">
                            <span className="text-2xl">🌍</span>
                        </div>
                        <span className="uppercase tracking-widest text-xs font-bold">Global Mindset</span>
                    </div>
                    <div className="w-px h-12 bg-slate-200 hidden md:block" />
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-2 shadow-sm border border-slate-100">
                            <span className="text-2xl">🤖</span>
                        </div>
                        <span className="uppercase tracking-widest text-xs font-bold">Innovation</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
