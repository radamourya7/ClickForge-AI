import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, FireExtinguisher, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Magnetic Button Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.4);
        mouseY.set(y * 0.4);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="relative min-vh-100 flex items-center justify-center pt-32 pb-24 overflow-hidden">
            <div className="noise-bg" />

            {/* Background Glows */}
            <div className="glow-blob top-[-10%] left-[-10%] opacity-20 dark:opacity-30" />
            <div className="glow-blob bottom-[-10%] right-[-10%] opacity-20 dark:opacity-30" style={{ animationDelay: '-5s' }} />

            {/* Parallax Stickers */}
            <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] text-6xl opacity-30 sticker select-none">🔥</motion.div>
            <motion.div style={{ y: y2 }} className="absolute top-40 right-[15%] text-7xl opacity-30 sticker select-none">🧠</motion.div>
            <motion.div style={{ y: y1 }} className="absolute bottom-20 left-[20%] text-5xl opacity-20 sticker select-none">💀</motion.div>
            <motion.div style={{ y: y2 }} className="absolute top-1/2 right-[10%] text-6xl opacity-30 sticker select-none">🧊</motion.div>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/10 text-blue-500 dark:text-blue-400 text-xs font-black mb-10 uppercase tracking-[0.3em] shadow-xl"
                >
                    <Trophy size={16} /> UNLEASH THE VIBE <Sparkles size={16} />
                </motion.div>

                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter leading-none italic uppercase text-[var(--text-primary)] transition-all drop-shadow-2xl"
                >
                    ACADEMIC <br />
                    <span className="gradient-text italic">WEAPONRY</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[var(--text-secondary)] text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-bold tracking-tight leading-relaxed"
                >
                    POV: You found the tool that makes GPA go brrrrr. <br className="hidden md:block" /> No cap, just high-diff AI for the modern student.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-8"
                >
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ x: springX, y: springY }}
                    >
                        <Link to="/register" className="group relative px-12 py-6 bg-[var(--text-primary)] text-[var(--bg-color)] rounded-2xl text-2xl font-black hover:scale-105 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all flex items-center gap-4 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-3">
                                GET GAINS <Zap size={24} className="fill-current text-blue-500" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                        </Link>
                    </motion.div>

                    <a href="#trending" className="group text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-colors flex items-center gap-3">
                        EXPLORE TOOLS <FireExtinguisher size={20} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

