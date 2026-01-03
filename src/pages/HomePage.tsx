import { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from '../components/home/Hero';
import { Intro } from '../components/home/Intro';
import { GoldenTriangle } from '../components/home/GoldenTriangle';
import { Highlights } from '../components/home/Highlights';
import { DaySchedule } from '../components/home/DaySchedule';
import { FeatureStrip } from '../components/home/FeatureStrip';
import KeepExploringBlock from '../components/KeepExploringBlock';

const HomePage = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="w-full bg-white">
            <Hero />
            <Intro />
            <GoldenTriangle />
            <Highlights />
            <DaySchedule />
            <FeatureStrip />

            {/* Keep Exploring / Navigation Block */}
            <KeepExploringBlock
                currentPage="home" // We need to update KeepExploringBlock to handle 'home' case or pass data manually if needed, but per plan config should handle it.
            />
        </main>
    );
};

export default HomePage;
