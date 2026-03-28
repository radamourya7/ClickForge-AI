import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, FireExtinguisher, Trophy, Heart } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Parallax Stickers */}
            <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] text-6xl opacity-30 sticker">🔥</motion.div>
            <motion.div style={{ y: y2 }} className="absolute top-40 right-[15%] text-7xl opacity-30 sticker">🧠</motion.div>
            <motion.div style={{ y: y1 }} className="absolute bottom-20 left-[20%] text-5xl opacity-20 sticker">💀</motion.div>
            <motion.div style={{ y: y2 }} className="absolute top-1/2 right-[10%] text-6xl opacity-30 sticker">🧊</motion.div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-lime-500/20 text-lime-500 dark:text-lime-400 text-xs font-black mb-10 uppercase tracking-[0.3em]"
                >
                    <Trophy size={16} /> UNLEASH THE VIBE
                </motion.div>

                <h1 className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter leading-none italic uppercase text-[var(--text-primary)]">
                    ACADEMIC <br />
                    <span className="gradient-text italic">WEAPONRY</span>
                </h1>

                <p className="text-[var(--text-secondary)] text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-bold tracking-tight">
                    POV: You found the tool that makes GPA go brrrrr. <br className="hidden md:block" /> No cap, just high-diff AI.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8">
                    <Link to="/register" className="group relative px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-color)] rounded-[2rem] text-2xl font-black hover:scale-105 hover:shadow-[0_0_50px_rgba(204,255,0,0.3)] transition-all flex items-center gap-4 overflow-hidden">
                        GET GAINS <Zap size={24} className="fill-current" />
                    </Link>
                    <a href="#trending" className="text-xs font-black uppercase tracking-[0.4em] hover:text-lime-500 transition-colors flex items-center gap-2">
                        THE TOOLS <FireExtinguisher size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
