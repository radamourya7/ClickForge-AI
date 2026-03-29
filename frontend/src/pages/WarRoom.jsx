import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, AlertTriangle, Shield, Globe, Activity, Terminal, Newspaper, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getConflictDay, warBriefings, tacticalMarkers, dailyNews, liveSources } from '../data/warData';

const WarRoom = () => {
    const day = getConflictDay();
    const briefing = warBriefings[`D${day}`] || warBriefings.DEFAULT;
    const [terminalLines, setTerminalLines] = useState([
        "> Initializing encrypted link...",
        "> Handshake protocol: SUCCESS",
        "> Decoding satellite imagery...",
        "> Status: Operational Day " + day
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const lines = [
                "> Signal pulse detected at Hormuz...",
                "> Scrambling frequency: 142.5 MHz",
                "> New intel received from Northern Command",
                "> Thermal spike in Tel Aviv sector",
                "> Intercepting encrypted Tehran comms...",
                "> Air defense active: 94.2% efficiency",
                "> Monitoring deep-strike silos..."
            ];
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            setTerminalLines(prev => [...prev.slice(-10), randomLine]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-red-500 font-mono selection:bg-red-500/30 overflow-hidden relative p-8 pt-24 mt-16 pb-20">
            <Helmet>
                <title>WAR ROOM | LIVE Strategic News & Conflict Tracker 🛰️</title>
                <meta name="description" content="Live tracking of the Iran-Israel conflict. Day 30+ tactical updates, satellite intel, and breaking news from middle-east fronts." />
                <meta name="keywords" content="Iran Israel conflict live, war updates, tactical map, middle east news today, day 30 conflict, war room dashboard, Sigma AI war room" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://sigmaaitools.netlify.app/war-room" />
                <meta property="og:title" content="WAR ROOM | LIVE Strategic News Dashboard 🛰️" />
                <meta property="og:description" content="Real-time tactical awareness and breaking news updates from the Iran-Israel conflict zones. Updated daily." />
                <meta property="og:image" content="https://sigmaaitools.netlify.app/og-war-room.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sigmaaitools.netlify.app/war-room" />
                <meta property="twitter:title" content="WAR ROOM | LIVE Strategic News Dashboard 🛰️" />
                <meta property="twitter:description" content="Real-time tactical awareness and breaking news updates from the Iran-Israel conflict zones. Updated daily." />
                <meta property="twitter:image" content="https://sigmaaitools.netlify.app/og-war-room.png" />
            </Helmet>

            {/* Scanline & Glitch Overlays */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-4 animate-scanline" />
            </div>

            {/* Top Breaking News Ticker */}
            <div className="fixed top-20 left-0 right-0 z-40 bg-red-600/90 text-white py-1.5 border-y border-red-500 overflow-hidden whitespace-nowrap flex items-center shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="px-6 bg-red-800 font-black italic text-[10px] tracking-tighter flex items-center gap-2 relative z-10 shrink-0 border-r border-red-400/30">
                    <Activity size={14} className="animate-pulse" /> BREAKING NEWS
                </div>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    className="flex gap-12 items-center px-12 text-[10px] font-black uppercase tracking-[0.2em]"
                >
                    {dailyNews.map((news, i) => (
                        <span key={i} className="flex items-center gap-4">
                            <span className="opacity-50">●</span> {news.headline} <span className="text-red-200 bg-red-900/40 px-2 py-0.5 rounded">[{news.source}]</span>
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {dailyNews.map((news, i) => (
                        <span key={`dup-${i}`} className="flex items-center gap-4">
                            <span className="opacity-50">●</span> {news.headline} <span className="text-red-200 bg-red-900/40 px-2 py-0.5 rounded">[{news.source}]</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">

                {/* Left Side: Briefing & Sources */}
                <div className="lg:col-span-1 space-y-6">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-500 group-hover:w-2 transition-all" />
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-2 text-red-500/70">
                            <Radio size={14} className="animate-pulse" /> TACTICAL HUB
                        </h2>

                        <div className="space-y-8 text-xs font-bold uppercase tracking-wider">
                            <div className="p-5 bg-red-950/40 rounded-xl border border-red-500/20 shadow-inner">
                                <span className="opacity-40 text-[8px] block mb-2 tracking-widest">CURRENT PHASE</span>
                                <span className="glow-red text-xl italic bebas tracking-wider">{briefing.status}</span>
                            </div>
                            <div className="px-2">
                                <span className="opacity-40 text-[8px] block mb-2 tracking-widest text-red-500/50">OPERATIONAL ZONE</span>
                                <span className="text-red-200 text-sm font-black">{briefing.location}</span>
                            </div>
                            <div className="px-2">
                                <span className="opacity-40 text-[8px] block mb-2 tracking-widest text-red-500/50">INTEL BRIEFING</span>
                                <p className="text-red-100/60 leading-relaxed italic text-[11px] lowercase first-letter:uppercase">{briefing.intel}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-black/40 border border-white/5 p-6 rounded-2xl backdrop-blur-md shadow-xl"
                    >
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2 text-slate-500">
                            <LinkIcon size={14} /> LIVE CHANNELS
                        </h2>
                        <div className="space-y-3">
                            {liveSources.map(source => (
                                <a
                                    key={source.name}
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-red-500/10 transition-all border border-white/5 group active:scale-95"
                                >
                                    <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-red-400 group-hover:pl-2 transition-all">{source.name}</span>
                                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-500" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Center: Tactical Map */}
                <div className="lg:col-span-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-950/10 border border-red-500/10 rounded-[3rem] h-[700px] relative overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(239,68,68,0.05)] border-red-500/20"
                    >
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ef4444 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

                        <div className="absolute top-12 left-12">
                            <span className="text-red-600/40 text-[10px] font-black tracking-[0.8em] uppercase block mb-2">CRITICAL UPDATE</span>
                            <h1 className="text-7xl font-black italic tracking-tighter uppercase text-red-600 glow-red bebas">DAY {day} SUMMARY</h1>
                        </div>

                        {/* Interactive Markers */}
                        <div className="absolute inset-0 flex items-center justify-center p-20 opacity-20 pointer-events-none">
                            <svg viewBox="0 0 100 80" className="w-full h-full stroke-red-500 stroke-[0.3] fill-transparent">
                                <path d="M10,20 Q30,10 50,30 T90,10 T80,70 T20,60 Z" />
                                <circle cx="50" cy="40" r="35" className="stroke-red-500/10" />
                            </svg>
                        </div>

                        {tacticalMarkers.map(marker => (
                            <motion.div
                                key={marker.id}
                                style={{ top: `${marker.y}%`, left: `${marker.x}%` }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-crosshair"
                            >
                                <div className="relative">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 animate-ping absolute inset-[-6px]" />
                                    <div className={`w-3 h-3 rounded-full ${marker.type === 'primary' ? 'bg-red-600 shadow-[0_0_20px_#ef4444]' : 'bg-red-400'} group-hover:scale-150 transition-all relative z-10`} />
                                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-red-950/95 text-white text-[10px] px-3 py-1.5 border border-red-500/30 font-black uppercase whitespace-nowrap tracking-widest rounded shadow-2xl">
                                        {marker.name}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-black text-red-500/40 uppercase tracking-[0.4em]">SATCOM ACTIVE</span>
                                <div className="flex items-center gap-4 bg-red-600/10 px-4 py-2 rounded-xl border border-red-500/20 backdrop-blur-md">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
                                    <span className="text-[10px] font-black text-emerald-400 tracking-widest">SIGNAL STRENGTH: 100%</span>
                                </div>
                            </div>
                            <Globe size={48} className="animate-spin-slow opacity-10 text-red-500" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Global News Feed */}
                <div className="lg:col-span-1 space-y-6">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-red-950/10 border border-red-500/20 p-6 rounded-2xl h-[700px] flex flex-col backdrop-blur-2xl shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-red-500/10">
                            <Newspaper size={20} className="text-red-500 animate-pulse" />
                            <h2 className="text-sm font-black uppercase tracking-widest text-red-500 bebas italic">INTEL FEED</h2>
                        </div>

                        <div className="flex-grow overflow-y-auto space-y-4 pr-3 custom-scrollbar">
                            {dailyNews.map((news, i) => (
                                <motion.div
                                    key={news.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 3, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                                    className="p-4 bg-white/5 border border-white/5 rounded-xl transition-all cursor-default group"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <span className={`text-[8px] font-black px-2 py-0.5 rounded ${news.urgency === 'Critical' ? 'bg-red-600 text-white' : 'bg-red-500/20 text-red-400'} uppercase tracking-tighter`}>
                                            {news.urgency}
                                        </span>
                                        <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">{news.time}</span>
                                    </div>
                                    <h3 className="text-[11px] font-black text-red-100 group-hover:text-red-400 transition-colors leading-snug mb-3 lowercase first-letter:uppercase">
                                        {news.headline}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="h-px flex-grow bg-red-500/10" />
                                        <span className="text-[8px] font-black text-red-500/50 uppercase tracking-[0.2em]">{news.source}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-red-500/10">
                            <div className="flex items-center gap-3 text-red-500/30 mb-4 px-2">
                                <Terminal size={12} />
                                <span className="text-[9px] font-black tracking-[0.4em] uppercase">SYSTEM LOGS</span>
                            </div>
                            <div className="bg-black/40 p-4 rounded-xl border border-white/5 overflow-hidden h-28 space-y-1">
                                {terminalLines.map((line, i) => (
                                    <div key={i} className="truncate text-[9px] font-bold opacity-20 hover:opacity-100 transition-opacity">{line}</div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default WarRoom;
