import { PageConfig } from '../types';

export const getPagesConfig = (t: any): Record<string, PageConfig> => ({
    // --- GROUP A: Top Funnel ---
    "/": {
        id: "home",
        title: t.nav.home,
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.home.hero.title,
                    subtitle: t.pages.home.hero.subtitle,
                    video: "https://assets.mixkit.co/videos/preview/mixkit-happy-children-playing-in-the-park-42865-large.mp4",
                    ctaLabel: t.pages.home.hero.cta,
                    ctaLink: "/about"
                }
            },
            {
                id: "stats",
                type: "stats",
                data: {
                    items: [
                        { value: "25 " + (t.pages.home.stats.history === "Years" ? "Years" : "лет"), label: t.pages.home.stats.history },
                        { value: "1200+", label: t.pages.home.stats.graduates },
                        { value: "100%", label: t.pages.home.stats.admission }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.pages.home.keepExploring.philosophy.label, title: t.pages.home.keepExploring.philosophy.title, link: "/approach", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" },
                        { label: t.pages.home.keepExploring.atmosphere.label, title: t.pages.home.keepExploring.atmosphere.title, link: "/facilities", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
                        { label: t.pages.home.keepExploring.result.label, title: t.pages.home.keepExploring.result.title, link: "/about", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/about": {
        id: "about",
        title: t.nav.about,
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.about.hero.title,
                    subtitle: t.pages.about.hero.subtitle,
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "history",
                type: "text-media",
                data: {
                    title: t.pages.about.history.title,
                    content: t.pages.about.history.content,
                    layout: "left",
                    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.pages.about.keepExploring.leadership.label, title: t.pages.about.keepExploring.leadership.title, link: "/about/leadership", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
                        { label: t.pages.about.keepExploring.team.label, title: t.pages.about.keepExploring.team.title, link: "/team", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" },
                        { label: t.pages.about.keepExploring.careers.label, title: t.pages.about.keepExploring.careers.title, link: "/careers", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },

    // --- GROUP B: Product ---
    "/approach": {
        id: "approach",
        title: t.nav.home, // Assuming "Approach" is intended, but checking usage
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.approach.hero.title,
                    subtitle: t.pages.approach.hero.subtitle,
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "methodology",
                type: "text-media",
                data: {
                    title: t.pages.approach.methodology.title,
                    content: t.pages.approach.methodology.content,
                    layout: "right",
                    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "softskills",
                type: "stats",
                data: {
                    items: [
                        { value: "Chess", label: t.pages.approach.softskills.chess },
                        { value: "Debate", label: t.pages.approach.softskills.debate },
                        { value: "AI", label: t.pages.approach.softskills.ai }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.pages.home.keepExploring.philosophy.label, title: t.pages.academics.hero.title, link: "/academics", image: "https://images.unsplash.com/photo-1427504746696-ea5abc71a3c2?auto=format&fit=crop&q=80&w=800" },
                        { label: t.pages.home.keepExploring.atmosphere.label, title: t.pages.facilities.hero.title, link: "/facilities", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.tour, title: t.hero.bookTour, link: "/book-tour", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/academics": {
        id: "academics",
        title: t.nav.objects,
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.academics.hero.title,
                    subtitle: t.pages.academics.hero.subtitle,
                    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "levels",
                type: "card-slider",
                data: {
                    title: t.pages.academics.levels.title,
                    items: [
                        { title: "Junior School", description: t.pages.academics.levels.junior, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600", link: "/academics/junior" },
                        { title: "Middle School", description: t.pages.academics.levels.middle, image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600", link: "/academics/middle" },
                        { title: "Senior School", description: t.pages.academics.levels.senior, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", link: "/academics/senior" }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.nav.live, title: t.pages.home.keepExploring.result.title, link: "/clubs", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.businessCenter, title: t.pages.admissions.hero.title, link: "/admissions", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.contacts, title: t.contact.title, link: "/contact", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },

    // --- GROUP C: Conversion ---
    "/facilities": {
        id: "facilities",
        title: t.nav.fitness,
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.facilities.hero.title,
                    subtitle: t.pages.facilities.hero.subtitle,
                    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "intro",
                type: "text-media",
                data: {
                    title: t.pages.facilities.intro.title,
                    content: t.pages.facilities.intro.content,
                    layout: "left",
                    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800"
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.nav.contacts, title: t.contact.title, link: "/contact", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.tour, title: t.hero.bookTour, link: "/book-tour", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.businessCenter, title: t.pages.admissions.hero.title, link: "/admissions", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    },
    "/admissions": {
        id: "admissions",
        title: t.nav.businessCenter,
        sections: [
            {
                id: "hero",
                type: "hero",
                data: {
                    title: t.pages.admissions.hero.title,
                    subtitle: t.pages.admissions.hero.subtitle,
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
                }
            },
            {
                id: "steps",
                type: "stats",
                data: {
                    items: [
                        { value: "01", label: t.pages.admissions.steps.apply },
                        { value: "02", label: t.pages.admissions.steps.testing },
                        { value: "03", label: t.pages.admissions.steps.contract }
                    ]
                }
            },
            {
                id: "fees",
                type: "accordion",
                data: {
                    title: t.pages.admissions.fees.title,
                    items: [
                        { title: "Junior School (1-4)", content: t.pages.admissions.fees.junior },
                        { title: "Middle School (5-8)", content: t.pages.admissions.fees.middle },
                        { title: "Senior School (9-11)", content: t.pages.admissions.fees.senior }
                    ]
                }
            },
            {
                id: "faq",
                type: "accordion",
                data: {
                    title: t.pages.admissions.faq.title,
                    items: [
                        { title: t.pages.admissions.faq.q1, content: t.pages.admissions.faq.a1 },
                        { title: t.pages.admissions.faq.q2, content: t.pages.admissions.faq.a2 }
                    ]
                }
            },
            {
                id: "keep-exploring",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.nav.media, title: t.nav.live, link: "/news", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" },
                        { label: t.nav.contacts, title: t.contact.title, link: "/contact", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800" },
                        { label: "Overview", title: t.nav.home, link: "/enrolments", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" }
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
                    ctaLabel: t.nav.contactBtn,
                    ctaLink: "/admissions",
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
                    layout: "left"
                }
            },
            {
                id: "next-steps",
                type: "cta-grid",
                data: {
                    title: t.pages.home.keepExploring.title,
                    items: [
                        { label: t.pages.admissions.steps.apply, title: t.pages.admissions.hero.title, link: "/admissions", image: "https://images.unsplash.com/photo-1427504746696-ea5abc71a3c2?auto=format&fit=crop&q=80&w=800" },
                        { label: "Tour", title: t.hero.bookTour, link: "/book-tour", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800" },
                        { label: "Fees", title: t.pages.admissions.fees.title, link: "/admissions", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=800" }
                    ]
                }
            }
        ]
    }
});

