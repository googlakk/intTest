import { motion } from 'framer-motion';
import { Brain, Cpu, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay }}
        className="bg-slate-900 text-white p-8 rounded-3xl group hover:bg-slate-800 transition-colors cursor-default"
    >
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} className="text-blue-400" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
);

export const FeatureStrip = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Intellect Pro?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Cpu}
                        title="Advanced Tech"
                        desc="We integrate AI learning assistants and modern coding platforms into daily curriculum."
                        delay={0}
                    />
                    <FeatureCard
                        icon={Brain}
                        title="Neuro-Pedagogy"
                        desc="Our teaching methods are based on how the brain actually learns and retains information."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Users}
                        title="Soft Skills Focus"
                        desc="Debate clubs, chess, and leadership programs are just as important as math."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};
