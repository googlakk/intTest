import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';

interface DayActivity {
    id: number;
    time: string;
    label: string;
    description: string;
    image: string;
    color: string;
}

const ACTIVITIES: DayActivity[] = [
    {
        id: 1,
        time: '08:00',
        label: 'Первый урок',
        description: 'Начало учебного дня с основных предметов: математика, языки, естественные науки',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
        color: '#3B82F6' // blue
    },
    {
        id: 2,
        time: '09:30',
        label: 'Завтрак',
        description: 'Здоровое питание и время для общения со сверстниками',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
        color: '#F59E0B' // amber
    },
    {
        id: 3,
        time: '10:00',
        label: 'Второй урок',
        description: 'Продолжение академической программы с акцентом на креативность и критическое мышление',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
        color: '#8B5CF6' // violet
    },
    {
        id: 4,
        time: '12:00',
        label: 'Обед',
        description: 'Полноценный обед с разнообразным меню, приготовленным нашими поварами',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
        color: '#EF4444' // red
    },
    {
        id: 5,
        time: '13:00',
        label: 'Кружки',
        description: 'Время для развития талантов: искусство, музыка, театр, программирование',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        color: '#10B981' // green
    },
    {
        id: 6,
        time: '14:30',
        label: 'Полдник',
        description: 'Легкий перекус для восстановления энергии',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
        color: '#F97316' // orange
    },
    {
        id: 7,
        time: '15:00',
        label: 'Study Club',
        description: 'Время для выполнения домашних заданий с помощью педагогов',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        color: '#6366F1' // indigo
    },
    {
        id: 8,
        time: '16:00',
        label: 'Третий урок',
        description: 'Дополнительные занятия и проектная деятельность',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
        color: '#EC4899' // pink
    },
    {
        id: 9,
        time: '17:00',
        label: 'Развоз',
        description: 'Безопасная доставка детей домой на комфортабельном транспорте',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
        color: '#14B8A6' // teal
    }
];

export const DaySchedule = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollLockRef = useRef(false);
    const activeIndexRef = useRef(0);

    // Sync ref for access in wheel handler without re-creating it unnecessarily
    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const motionIndex = useMotionValue<number>(0);
    const scrollIndex = useSpring(motionIndex, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        motionIndex.set(activeIndex);
    }, [activeIndex, motionIndex]);

    // Controlled Scroll Interaction with Discrete Steps
    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const containerTop = container.offsetTop;

            const isSticky = rect.top <= 5 && rect.bottom >= window.innerHeight;

            if (isSticky) {
                // Determine direction
                const direction = e.deltaY > 0 ? 1 : -1;

                // Escape Hatches at boundaries (release scroll to browser)
                if (activeIndexRef.current === 0 && direction < 0) return;
                if (activeIndexRef.current === ACTIVITIES.length - 1 && direction > 0) return;

                // Stop default scroll once we are inside the sticky range
                e.preventDefault();

                if (scrollLockRef.current) return;

                // Increment/Decrement state
                const nextIndex = Math.max(0, Math.min(ACTIVITIES.length - 1, activeIndexRef.current + direction));

                if (nextIndex !== activeIndexRef.current) {
                    scrollLockRef.current = true;
                    setActiveIndex(nextIndex);

                    // Calculation: Find where exactly each index should land.
                    // The total travel distance is (height - viewport).
                    // We divide this distance into equal steps.
                    const totalTravel = container.scrollHeight - window.innerHeight;
                    const stepSize = totalTravel / (ACTIVITIES.length - 1);
                    const targetScroll = containerTop + (nextIndex * stepSize);

                    window.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth'
                    });

                    // Lock to prevent multiple triggers from one wheel flick
                    setTimeout(() => {
                        scrollLockRef.current = false;
                    }, 800); // Slightly reduced lock for snappier feel
                }
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, []); // Listener is now stable and uses refs for state/lock

    // Track scroll progress for external blending? 
    // We already have scrollIndex which is better for our internal elements.
    // For blending with other sections, scrollYProgress is still useful.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Internal progress mapping (0 to 1) based on the current smooth index
    const internalProgress = useTransform(scrollIndex, [0, ACTIVITIES.length - 1], [0, 1]);

    // Smooth progress for background blending (can stay linked to scrollIndex)
    const smoothProgress = internalProgress;

    // Linear mapping for cards
    const currentIndex = scrollIndex;

    // Background gradient colors - added white at start/end for smooth blending
    const backgroundColors = [
        '#ffffff',                // Pure white transition start
        'rgba(30, 58, 138, 1)',    // Deep blue (morning)
        'rgba(59, 130, 246, 1)',   // Blue
        'rgba(251, 191, 36, 1)',   // Amber (noon)
        'rgba(249, 115, 22, 1)',   // Orange
        'rgba(126, 34, 206, 1)',   // Purple (evening)
        'rgba(17, 24, 39, 1)',     // Dark (night)
        '#ffffff'                 // Pure white transition end
    ];

    // Total height based on activity count to match 100vh steps
    const totalHeight = `${(ACTIVITIES.length) * 100}vh`;

    return (
        <section
            ref={containerRef}
            className="relative w-full"
            style={{ height: totalHeight }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Background */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: useTransform(
                            smoothProgress,
                            [0, 0.1, 0.25, 0.45, 0.6, 0.75, 0.9, 1],
                            backgroundColors
                        )
                    }}
                />

                {/* LAYER 1: Distant Mountains (Far Background) */}
                <motion.div
                    className="absolute top-[18%] left-0 w-full h-[35%] pointer-events-none z-0"
                    style={{
                        y: useTransform(smoothProgress, [0, 1], ['3%', '-3%']),
                        opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 0.2, 0.2, 0]),
                    }}
                >
                    <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none" fill="none">
                        <path
                            d="M-100 350 L100 250 L250 320 L400 150 L600 340 L800 180 L1000 320 L1150 220 L1300 380"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeOpacity="0.4"
                        />
                    </svg>
                </motion.div>

                {/* LAYER 2: Bishkek Cityscape (Mid Background) */}
                <motion.div
                    className="absolute top-[28%] left-0 w-full h-[30%] pointer-events-none z-0"
                    style={{
                        y: useTransform(smoothProgress, [0, 1], ['6%', '-6%']),
                        opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 0.5, 0.5, 0]),
                    }}
                >
                    <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none" fill="none">
                        {/* City Silhouettes (Buildings, TV Tower, Apartment Blocks) */}
                        <path
                            d="M-50 400 L50 400 L50 320 L80 320 L80 340 L120 340 L120 280 L160 280 L160 400 
                               L220 400 L220 300 L250 260 L280 300 L280 400 
                               L350 400 L350 150 L360 150 L360 400 
                               L420 400 L420 330 L480 330 L480 400 
                               L550 400 L550 200 L570 200 L570 100 L585 100 L585 200 L605 200 L605 400 
                               L680 400 L680 310 L740 310 L740 400 
                               L820 400 L820 250 L860 210 L900 250 L900 400 
                               L980 400 L980 340 L1050 340 L1050 400 
                               L1120 400 L1120 300 L1160 300 L1160 400 L1250 400"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeOpacity="0.6"
                        />
                    </svg>
                </motion.div>

                {/* Sun - Parabolic trajectory (Rise and Set) */}
                <motion.div
                    className="absolute"
                    style={{
                        left: useTransform(smoothProgress, [0, 1], ['15%', '85%']),
                        top: useTransform(smoothProgress, [0, 0.5, 1], ['40%', '8%', '40%']),
                        x: '-50%',
                        opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
                    }}
                >
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-300 rounded-full shadow-2xl"
                        style={{
                            boxShadow: '0 0 60px 30px rgba(253, 224, 71, 0.4)',
                            filter: 'blur(1px)'
                        }}
                    />
                </motion.div>

                {/* School removed as per request */}
                {/* 
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center pointer-events-none">
                    <img ... />
                </div> 
                */}

                {/* Top/Bottom Gradient Fades - REMOVED for clarity (was looking "dirty") */}
                {/* We now use background color interpolation to white at start/end */}

                {/* Central Info Display - Text removed from cards and moved here */}
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-2xl px-4 pointer-events-none">
                    {ACTIVITIES.map((activity, index) => {
                        const offset = useTransform(smoothProgress, (v) => {
                            const progress = index / (ACTIVITIES.length - 1);
                            return Math.abs(v - progress);
                        });
                        const opacity = useTransform(offset, [0, 0.05], [1, 0]);
                        const y = useTransform(offset, [0, 0.05], [0, 10]);

                        return (
                            <motion.div
                                key={`info-${activity.id}`}
                                className="absolute top-0 left-0 right-0 flex flex-col items-center"
                                style={{ opacity, y }}
                            >
                                <div
                                    className="text-xs font-bold px-3 py-1 rounded-full text-white mb-2"
                                    style={{ backgroundColor: activity.color }}
                                >
                                    {activity.time}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-2">
                                    {activity.label}
                                </h2>
                                <p className="text-white/80 text-sm md:text-base max-w-md mx-auto drop-shadow-md">
                                    {activity.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Carousel */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {ACTIVITIES.map((activity, index) => {
                        return (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                                index={index}
                                currentIndex={currentIndex}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Separated component to handle complex transforms per card
const ActivityCard = ({ activity, index, currentIndex }: { activity: DayActivity, index: number, currentIndex: MotionValue<number>, key?: any }) => {

    // Smooth stepping logic is handled by the scroll controller now
    // We just render based on fluid spring for nice transitions
    const offset = useTransform(currentIndex, (current: number) => index - current);

    // Only show if within range
    const opacity = useTransform(offset, [-2.5, -2, 0, 2, 2.5], [0, 1, 1, 1, 0]);

    // Scale: Center is biggest (1.35), sides smaller (0.55)
    // Using smooth plateau for scale to keep center active longer? 
    // No, fluid is fine with snapping scroll.
    const scale = useTransform(offset, [-2, 0, 2], [0.55, 1.35, 0.55]);

    // Z-Index
    const zIndex = useTransform(offset, (v) => Math.round(100 - Math.abs(v) * 10));

    // X Position - Increased spacing
    const x = useTransform(offset, (v) => `${50 + v * 30}%`);

    // Y Position (U-shape / "Smile")
    // Edges (abs(v)=2) are at ~40% (higher), Center (v=0) is at ~70% (lower)
    const y = useTransform(offset, (v) => {
        return `${70 - Math.abs(v) * 15}%`;
    });

    // Content visibility
    const showContent = useTransform(offset, [-0.3, 0, 0.3], [0, 1, 0]);
    const contentY = useTransform(offset, [-0.3, 0, 0.3], [20, 0, 20]);

    // Blur/Dim removed for performance
    // const blurValue = ...
    // const brightnessValue = ...

    return (
        <motion.div
            className="absolute top-0 left-0"
            style={{
                left: x,
                top: y,
                x: '-50%',
                y: '-50%',
                scale,
                opacity,
                zIndex,
                // filter: useTransform(...) REMOVED for performance
                willChange: 'transform, opacity', // Hardware acceleration
                pointerEvents: 'auto',
                // Dynamic shadow: only show shadow for active card to reduce visual noise
                boxShadow: useTransform(offset, [-0.5, 0, 0.5], [
                    '0 0px 0px rgba(0,0,0,0)',
                    '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                    '0 0px 0px rgba(0,0,0,0)'
                ])
            }}
        >
            {/* Clean photo card without text overlay for a "minimalist" look */}
            <div className="relative bg-transparent rounded-2xl overflow-hidden w-64 md:w-80 h-48 md:h-60">
                <img
                    src={activity.image}
                    alt={activity.label}
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
    );
};
