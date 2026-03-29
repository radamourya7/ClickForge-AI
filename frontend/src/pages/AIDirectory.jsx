import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Sparkles, MessageSquare, Search as SearchIcon, Code, Image as ImageIcon, Music, Video, Layout, FileText, PenTool, Globe, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { aiTools } from '../data/aiWorldData';

const iconMap = {
    MessageSquare, Sparkles, Search: SearchIcon, Code, Image: ImageIcon, Music, Video, Layout, FileText, PenTool
};

const AIDirectory = () => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(aiTools.map(t => t.category))];

    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
            tool.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
            <Helmet>
                <title>AI World | Best AI Tools Directory 🌐 Sigma AI</title>
                <meta name="description" content="A curated directory of the best AI tools on the internet for students, creators, and developers. Discover the elite AI arsenal for 2026." />
                <meta name="keywords" content="AI tools, AI directory, student AI tools, best AI for coding, AI design tools, Sigma AI, AI world, academic weaponry" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sigmaaitools.netlify.app/ai-world" />
                <meta property="og:title" content="AI World | Elite AI Tools Arsenal 🌐" />
                <meta property="og:description" content="Stop searching, start deploying. Every elite AI tool you need, hand-picked and categorized for maximum student gains." />
                <meta property="og:image" content="https://sigmaaitools.netlify.app/og-ai-world.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sigmaaitools.netlify.app/ai-world" />
                <meta property="twitter:title" content="AI World | Elite AI Tools Arsenal 🌐" />
                <meta property="twitter:description" content="Stop searching, start deploying. Every elite AI tool you need, hand-picked and categorized for maximum student gains." />
                <meta property="twitter:image" content="https://sigmaaitools.netlify.app/og-ai-world.png" />
            </Helmet>

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-6 py-2 glass rounded-full text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-8 border-blue-500/20"
                >
                    <Globe size={14} className="animate-spin-slow" /> Global AI Arsenal
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-7xl font-black italic bebas uppercase tracking-tighter mb-6"
                >
                    AI <span className="gradient-text italic">World</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-[var(--text-secondary)] font-bold max-w-2xl mx-auto italic"
                >
                    The definitive collection of elite AI weaponry from across the digital frontier. No fluff, just the high-diff essentials.
                </motion.p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-16 relative z-10">
                <div className="relative w-full md:max-w-md group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search for tools, features, vibe..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-5 pl-14 pr-8 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                    />
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${activeCategory === cat
                                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30'
                                : 'glass text-slate-400 border-white/5 hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tool Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
                <AnimatePresence mode="popLayout">
                    {filteredTools.map((tool, idx) => {
                        const IconComponent = iconMap[tool.icon] || Zap;
                        return (
                            <motion.div
                                key={tool.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full glass p-8 rounded-[2.5rem] border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${tool.color}-500 opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`}></div>

                                    <div className="flex justify-between items-start mb-8 relative z-10">
                                        <div className={`p-4 rounded-2xl bg-${tool.color}-500/10 text-${tool.color}-500 shadow-xl border border-white/5`}>
                                            <IconComponent size={28} />
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-500 transition-colors uppercase font-black text-[10px] tracking-widest">
                                            Visit <ExternalLink size={14} />
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-${tool.color}-500/80 mb-2 block italic`}>
                                            {tool.category}
                                        </span>
                                        <h3 className="text-3xl font-black mb-4 tracking-tighter text-white group-hover:text-blue-400 transition-colors uppercase italic bebas">
                                            {tool.name}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] font-bold text-sm leading-relaxed mb-6 italic opacity-70 group-hover:opacity-100 transition-opacity">
                                            {tool.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full bg-gradient-to-r from-${tool.color}-500 to-blue-500 opacity-50`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>

            {filteredTools.length === 0 && (
                <div className="text-center py-40">
                    <div className="text-6xl mb-6">🤌</div>
                    <h3 className="text-2xl font-black text-slate-500 uppercase italic">No tools found matching your search.</h3>
                </div>
            )}
        </div>
    );
};

export default AIDirectory;
