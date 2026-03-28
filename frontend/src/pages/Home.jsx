import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, PenTool, LayoutGrid, FileText, Share2, Calculator, MessageSquare, Camera, Edit3, Heart, FileOutput, Scissors, Type, Zap, User, Flame, Ghost, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import AdPlaceholder from '../components/AdPlaceholder';

const Home = () => {
    const tools = {
        ai: [
            { id: 'humanizer', title: 'AI Humanizer 👤✨', description: 'Bypass AI detectors with 100% human-diff energy.', icon: User, colorClass: 'from-blue-600 to-indigo-600', badge: 'FIRE' },
            { id: 'resume-analyzer', title: 'Resume Weapon 📄⚡', description: 'Turn your resume into a job-grabbing beast.', icon: FileText, colorClass: 'from-purple-600 to-blue-600', badge: 'TREND' },
            { id: 'notes-summarizer', title: 'Lecture Crusher 🧠💥', description: 'Lectures to bullet points in seconds. Ez.', icon: Zap, colorClass: 'from-orange-500 to-red-500' },
            { id: 'chat-assistant', title: 'The Oracle 🔮', description: 'ClickForge Chat Assistant for all your problems.', icon: MessageSquare, colorClass: 'from-blue-500 to-emerald-500' },
        ],
        viral: [
            { id: 'insta-bio', title: 'Bio Ri$$ 📸💎', description: 'Instagram bios that make them click follow.', icon: Camera, colorClass: 'from-pink-600 to-orange-500', badge: 'GOAT' },
            { id: 'caption-gen', title: 'Caption Sauce 🌶️', description: 'Engaging captions for TikTok and Insta.', icon: Edit3, colorClass: 'from-emerald-400 to-cyan-500' },
            { id: 'pickup-lines', title: 'W Rizzler 🌹😏', description: 'Smooth pickup lines that actually work.', icon: Heart, colorClass: 'from-red-600 to-pink-400' },
        ],
        utility: [
            { id: 'pdf-merge', title: 'PDF Smasher 📂', description: 'Quickly merge or compress your PDF documents.', icon: FileOutput, colorClass: 'from-red-500 to-rose-700' },
            { id: 'word-counter', title: 'Word Flex ✍️', description: 'Deep analysis of your text for readability.', icon: Type, colorClass: 'from-slate-600 to-slate-800' },
        ],
        student: [
            { id: 'cgpa-calc', title: 'GPA Tracker 📈', description: 'Calculate your semester and cumulative GPA.', icon: Calculator, colorClass: 'from-indigo-600 to-purple-500' },
            { id: 'internships', title: 'Job Hunter 🏹', description: 'Browse and track latest internship opportunities.', icon: GraduationCap, colorClass: 'from-emerald-600 to-teal-500' },
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-6">
            <Helmet>
                <title>ClickForge | Unleash Your Academic Weapon 🧠💪</title>
                <meta name="description" content="The ultimate AI toolkit for students who want a 4.0 GPA with zero effort. No cap." />
            </Helmet>

            <Hero />

            <section className="mb-20">
                <div className="glass p-8 rounded-[3rem] border-lime-500/20 bg-gradient-to-r from-lime-500/10 to-transparent flex flex-wrap items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 blur-[60px] animate-pulse"></div>
                    <div className="flex items-center gap-6">
                        <div className="bg-lime-500 p-4 rounded-[1.5rem] animate-bounce shadow-[0_0_30px_rgba(204,255,0,0.5)]">
                            <Flame size={32} className="text-black" />
                        </div>
                        <div>
                            <h3 className="font-black text-3xl tracking-tighter uppercase italic bebas">The Daily Feed</h3>
                            <p className="text-lg text-[var(--text-secondary)] font-bold italic tracking-tight">"Sigma students use ClickForge. Be a Sigma." 🐺💪</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {['#AcademicWeapon', '#ClickForge', '#NoCap'].map(tag => (
                            <span key={tag} className="px-5 py-2 glass rounded-full text-xs font-black text-lime-500 border-lime-500/30 uppercase tracking-[0.2em]">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="trending" className="mt-28">
                <div className="flex items-center gap-4 mb-14">
                    <div className="w-16 h-1.5 bg-lime-500 rounded-full"></div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic bebas">The Arsenal</h2>
                </div>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {[...tools.ai, ...tools.viral].filter(t => t.badge).map(tool => (
                        <ToolCard key={tool.id} {...tool} />
                    ))}
                </motion.div>
            </section>

            <AdPlaceholder type="banner" />

            <section id="ai-tools" className="mt-32">
                <h2 className="text-5xl font-black mb-14 flex items-center gap-5 italic bebas uppercase">
                    <Ghost size={48} className="text-blue-400" /> AI Weaponry
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.ai.map(tool => (
                        <ToolCard key={tool.id} {...tool} />
                    ))}
                </div>
            </section>

            <section id="viral-tools" className="mt-32">
                <h2 className="text-5xl font-black mb-14 flex items-center gap-5 italic bebas uppercase">
                    <Rocket size={48} className="text-pink-500" /> Viral Gains
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.viral.map(tool => (
                        <ToolCard key={tool.id} {...tool} />
                    ))}
                </div>
            </section>

            <AdPlaceholder type="native" />

            {/* General & Student sections simplified for length */}
            <section id="student-tools" className="mt-32">
                <h2 className="text-5xl font-black mb-14 flex items-center gap-5 italic bebas uppercase">
                    <GraduationCap size={48} className="text-emerald-400" /> The Grind
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.student.map(tool => (
                        <ToolCard key={tool.id} {...tool} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
