import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, PenTool, FileText, MessageSquare, Calculator, Zap, User, Flame, Ghost, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';

const Section = ({ children, id, title, icon: Icon, color }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="py-24"
    >
        {title && (
            <div className="flex items-center gap-6 mb-16 px-2">
                <div className={`p-4 rounded-2xl glass border-${color}-500/20 text-${color}-500 shadow-xl`}>
                    <Icon size={40} />
                </div>
                <h2 className="text-6xl font-black italic bebas uppercase tracking-tighter text-[var(--text-primary)]">
                    {title}
                </h2>
            </div>
        )}
        {children}
    </motion.section>
);

const Home = () => {
    const tools = {
        ai: [
            { id: 'humanizer', title: 'AI Humanizer 👤✨', description: 'Bypass AI detectors with 100% human-diff energy. No cap.', icon: User, colorClass: 'from-blue-600 to-indigo-600', badge: 'FIRE' },
            { id: 'resume-analyzer', title: 'Resume Weapon 📄⚡', description: 'Turn your resume into a job-grabbing beast.', icon: FileText, colorClass: 'from-purple-600 to-blue-600', badge: 'TREND' },
            { id: 'notes-summarizer', title: 'Lecture Crusher 🧠💥', description: 'Lectures to bullet points in seconds. Ez.', icon: Zap, colorClass: 'from-orange-500 to-red-500' },
            { id: 'chat-assistant', title: 'The Oracle 🔮', description: 'Sigma Chat Assistant for all your problems.', icon: MessageSquare, colorClass: 'from-blue-500 to-emerald-500' },
        ],
        viral: [
            { id: 'insta-bio', title: 'Bio Ri$$ 📸💎', description: 'Instagram bios that make them click follow.', icon: MessageSquare, colorClass: 'from-pink-600 to-orange-500', badge: 'GOAT' },
            { id: 'caption-gen', title: 'Caption Sauce 🌶️', description: 'Engaging captions for TikTok and Insta.', icon: PenTool, colorClass: 'from-emerald-400 to-cyan-500' },
            { id: 'pickup-lines', title: 'W Rizzler 🌹😏', description: 'Smooth pickup lines that actually work.', icon: Flame, colorClass: 'from-red-600 to-pink-400' },
        ],
        student: [
            { id: 'cgpa-calc', title: 'GPA Tracker 📈', description: 'Calculate your semester and cumulative GPA.', icon: Calculator, colorClass: 'from-indigo-600 to-purple-500' },
            { id: 'internships', title: 'Job Hunter 🏹', description: 'Browse and track latest internship opportunities.', icon: GraduationCap, colorClass: 'from-emerald-600 to-teal-500' },
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-6 relative">
            <Helmet>
                <title>Sigma AI | Unleash Your Academic Weapon 🧠💪</title>
                <meta name="description" content="The ultimate AI toolkit for students. AI Plagiarism Humanizer, Resume Weapon, Lecture Crusher, and Viral Rizz Generators. No cap, just gains." />
            </Helmet>

            <Hero />

            <div className="space-y-12">
                {/* Daily Feed Banner */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="py-12"
                >
                    <div className="glass p-10 rounded-[3rem] border-blue-500/10 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-500/5 flex flex-wrap items-center justify-between gap-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="flex items-center gap-8 relative z-10">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="bg-gradient-to-tr from-blue-600 to-emerald-500 p-5 rounded-[2rem] shadow-2xl shadow-blue-500/20"
                            >
                                <Flame size={40} className="text-white fill-current" />
                            </motion.div>
                            <div>
                                <h3 className="font-black text-5xl tracking-tighter uppercase italic bebas text-[var(--text-primary)] mb-2">The Daily Feed</h3>
                                <p className="text-2xl text-[var(--text-secondary)] font-bold italic tracking-tight uppercase opacity-80">
                                    "Sigma students use Sigma AI. Be a <span className="text-blue-500">Sigma</span>." 🐺💪
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            {['#AcademicWeapon', '#SigmaAI', '#W_Rizz'].map(tag => (
                                <span key={tag} className="px-8 py-3 glass rounded-2xl text-xs font-black text-blue-500 border-blue-500/20 uppercase tracking-[0.2em] shadow-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <Section id="trending" title="The Arsenal" icon={Zap} color="blue">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[...tools.ai, ...tools.viral].filter(t => t.badge).map(tool => (
                            <ToolCard key={tool.id} {...tool} />
                        ))}
                    </div>
                </Section>

                <Section id="ai-tools" title="AI Weaponry" icon={Ghost} color="purple">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tools.ai.map(tool => (
                            <ToolCard key={tool.id} {...tool} />
                        ))}
                    </div>
                </Section>

                <Section id="viral-tools" title="Viral Gains" icon={Rocket} color="pink">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tools.viral.map(tool => (
                            <ToolCard key={tool.id} {...tool} />
                        ))}
                    </div>
                </Section>

                <Section id="student-tools" title="The Grind" icon={GraduationCap} color="emerald">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tools.student.map(tool => (
                            <ToolCard key={tool.id} {...tool} />
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Home;

