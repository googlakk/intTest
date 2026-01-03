import { PageConfig } from '../types';

export const pagesConfig: Record<string, PageConfig> = {
    // --- GROUP A: Top Funnel ---
    "/": {
        id: "home",
        title: "Главная",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Школа будущего в Бишкеке",
                    subtitle: "Intellect Pro — это не просто учеба, это развитие мышления.",
                    video: "https://assets.mixkit.co/videos/preview/mixkit-happy-children-playing-in-the-park-42865-large.mp4",
                    ctaLabel: "Узнать больше",
                    ctaLink: "/about"
                }
            },
            {
                id: "stats",
                type: "stats",
                data: {
                    items: [
                        { value: "25 лет", label: "Истории" },
                        { value: "1200+", label: "Выпускников" },
                        { value: "100%", label: "Поступления" }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Философия", title: "Узнать наш подход", link: "/approach", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" },
                        { label: "Атмосфера", title: "Увидеть кампус", link: "/facilities", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
                        { label: "Результат", title: "Истории успеха", link: "/about", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/about": {
        id: "about",
        title: "О нас",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Who We Are",
                    subtitle: "История создания школы и наши ценности.",
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "history",
                type: "text-media",
                data: {
                    title: "История и Ценности",
                    content: "Мы объединяем лучшие кыргызские традиции образования с глобальными технологиями. Наша миссия — воспитать лидеров будущего.",
                    layout: "left",
                    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Лидерство", title: "Слово директора", link: "/about/leadership", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
                        { label: "Команда", title: "Наши учителя", link: "/team", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" },
                        { label: "Карьера", title: "Стать частью команды", link: "/careers", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },

    // --- GROUP B: Product ---
    "/approach": {
        id: "approach",
        title: "Наш подход",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Our Approach",
                    subtitle: "Развитие навыков 21 века: Критическое мышление, ИИ и Шахматы.",
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "methodology",
                type: "text-media",
                data: {
                    title: "Методология и Технологии",
                    content: "Мы используем нейро-педагогику и индивидуальные треки обучения, усиленные современными инструментами как EduPage и AI.",
                    layout: "right",
                    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "softskills",
                type: "stats",
                data: {
                    items: [
                        { value: "Chess", label: "Strategic Thinking" },
                        { value: "Debate", label: "Public Speaking" },
                        { value: "AI", label: "Future Tech" }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Детализация", title: "Учебные программы", link: "/academics", image: "https://images.unsplash.com/photo-1427504746696-ea5abc71a3c2?auto=format&fit=crop&q=80&w=800" },
                        { label: "Среда", title: "Где проходят занятия", link: "/facilities", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800" },
                        { label: "Записаться", title: "Book a Tour", link: "/book-tour", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/academics": {
        id: "academics",
        title: "Ступени обучения",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Academics",
                    subtitle: "От младших классов до выпуска: Путь вашего ребенка.",
                    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "levels",
                type: "card-slider",
                data: {
                    title: "Образовательные ступени",
                    items: [
                        { title: "Junior School", description: "1-4 классы", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600", link: "/academics/junior" },
                        { title: "Middle School", description: "5-8 классы", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600", link: "/academics/middle" },
                        { title: "Senior School", description: "9-11 классы", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", link: "/academics/senior" }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Жизнь", title: "Вне уроков", link: "/clubs", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800" },
                        { label: "Действие", title: "Условия поступления", link: "/admissions", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
                        { label: "Контакты", title: "Связаться с нами", link: "/contact", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },

    // --- GROUP C: Conversion ---
    "/facilities": {
        id: "facilities",
        title: "Кампус",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Campus & Facilities",
                    subtitle: "Безопасное и вдохновляющее пространство для роста.",
                    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "intro",
                type: "text-media",
                data: {
                    title: "Современные лаборатории",
                    content: "Наш кампус оборудован всем необходимым для занятий наукой, спортом и творчеством. Безопасность и здоровое питание — наш приоритет.",
                    layout: "left",
                    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Локация", title: "Как добраться", link: "/contact", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" },
                        { label: "Финальный шаг", title: "Записаться на экскурсию", link: "/book-tour", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" },
                        { label: "Admissions", title: "Поступление", link: "/admissions", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/admissions": {
        id: "admissions",
        title: "Поступление",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Admissions",
                    subtitle: "Ваш путь в Intellect Pro School начинается здесь.",
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "steps",
                type: "stats",
                data: {
                    items: [
                        { value: "01", label: "Заявка" },
                        { value: "02", label: "Тестирование" },
                        { value: "03", label: "Договор" }
                    ]
                }
            },
            {
                id: "fees",
                type: "accordion",
                data: {
                    title: "Стоимость обучения (Fees)",
                    items: [
                        { title: "Junior School (1-4)", content: "Информация по стоимости для начальной школы..." },
                        { title: "Middle School (5-8)", content: "Информация по стоимости для средней школы..." },
                        { title: "Senior School (9-11)", content: "Информация по стоимости для старшей школы..." }
                    ]
                }
            },
            {
                id: "faq",
                type: "accordion",
                data: {
                    title: "FAQ",
                    items: [
                        { title: "Как проходит тестирование?", content: "Тестирование включает в себя математику, логику и английский язык..." },
                        { title: "Есть ли пробные дни?", content: "Да, мы предоставляем возможность пробного дня..." }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: "Keep Exploring",
                    items: [
                        { label: "Новости", title: "Жизнь школы сегодня", link: "/news", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" },
                        { label: "Контакты", title: "Задать вопрос", link: "/contact", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800" },
                        { label: "Overview", title: "Enrolments Overview", link: "/enrolments", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },

    // --- Westbourne Structure (Example/Reference) ---
    "/enrolments": {
        id: "enrolments",
        title: "Enrolments Overview",
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: "Enrolments Overview",
                    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=60&w=1600"
                }
            },
            {
                id: "content",
                type: "text-media",
                data: {
                    title: "Making the right choice",
                    content: "We understand that choosing a school is a significant decision. Our team is here to guide you every step of the way.",
                    ctaLabel: "Apply Now",
                    ctaLink: "/admissions",
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
                    layout: "left"
                }
            },
            {
                id: "next-steps",
                type: "cta-grid",
                data: {
                    title: "Explore More",
                    items: [
                        { label: "Steps", title: "Admissions Process", link: "/admissions", image: "https://images.unsplash.com/photo-1427504746696-ea5abc71a3c2?auto=format&fit=crop&q=80&w=800" },
                        { label: "Tour", title: "Book a Tour", link: "/book-tour", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800" },
                        { label: "Fees", title: "School Fees", link: "/admissions", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    }
};
