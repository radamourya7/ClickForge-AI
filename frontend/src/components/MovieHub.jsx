import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Monitor, Zap, Flame, Ticket, X, Play, Sparkles, RefreshCcw } from 'lucide-react';

const MovieHub = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Bollywood');
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('March 29, 2026 • 02:59 AM');

    const movies = {
        'Bollywood': [
            { id: 1, title: 'Mardaani 3', type: 'OTT', platform: 'Netflix', status: 'Available Now', badge: 'TRENDING' },
            { id: 2, title: 'O\' Romeo', type: 'OTT', platform: 'Prime Video', status: 'Rent Now', badge: 'SHAHID' },
            { id: 3, title: 'Sitaare Zameen Par', type: 'Theater', date: 'April 3', badge: 'AAMIR' },
            { id: 4, title: 'Happy Patel', type: 'OTT', platform: 'Netflix', status: 'April 1', badge: 'NEW' },
            { id: 5, title: 'Vadh 2', type: 'OTT', platform: 'Netflix', status: 'April 3' },
        ],
        'Tollywood': [
            { id: 6, title: 'Biker', type: 'Theater', date: 'April 3', badge: 'ACTION' },
            { id: 7, title: 'Dacoit', type: 'Theater', date: 'April 10', badge: 'HYPED' },
            { id: 8, title: 'Raakaasaa', type: 'Theater', date: 'March 27', status: 'Running Now' },
            { id: 9, title: 'Hey Balwanth', type: 'OTT', platform: 'ZEE5', status: 'Available Now' },
        ],
        'Hollywood': [
            { id: 10, title: 'Project Hail Mary', type: 'Theater', date: 'March 20', status: 'Running Now', badge: 'SCIFI' },
            { id: 11, title: 'The Super Mario Galaxy Movie', type: 'Theater', date: 'April 1', badge: 'MUST' },
            { id: 12, title: 'Michael (MJ Biopic)', type: 'Theater', date: 'April 24', badge: 'KING' },
            { id: 13, title: 'Bloodhounds S2', type: 'OTT', platform: 'Netflix', status: 'April 3' },
        ],
        'Kollywood': [
            { id: 14, title: 'Vidiyal', type: 'Theater', date: 'March 30', badge: 'TOMORROW' },
            { id: 15, title: 'LIK (Love Insurance Kompany)', type: 'Theater', date: 'April 10', badge: 'ROMCOM' },
            { id: 16, title: 'Chiyaan 63', type: 'Theater', date: 'April 14', badge: 'VIKRAM' },
            { id: 17, title: 'Happy Raj', type: 'Theater', date: 'March 27', status: 'Running Now' },
        ]
    };

    const handleSync = () => {
        setIsSyncing(true);
        // Simulate a real fetch with a small delay
        setTimeout(() => {
            setIsSyncing(false);
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setLastUpdated(`March 29, 2026 • ${timeStr}`);
        }, 1200);
    };

    const tabs = Object.keys(movies);

    return (
        <div className="relative z-[99999]">
            {/* Pop-out Trigger */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-[100000] border-2 border-white/20"
            >
                {isOpen ? <X size={24} className="text-white" /> : <Film size={24} className="text-white" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white dark:border-slate-900"></span>
                    </span>
                )}
            </motion.button>

            {/* Movie Hub Popover */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        className="fixed bottom-32 right-10 w-80 z-[99999] origin-bottom-right"
                    >
                        <div className="glass rounded-[2.5rem] p-6 border-blue-500/20 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] pointer-events-none"></div>

                            <div className="flex justify-between items-center mb-5">
                                <div>
                                    <h3 className="text-2xl font-black italic bebas uppercase flex items-center gap-2 tracking-tight">
                                        <Play className="text-blue-500 fill-current" size={18} /> THE SLATE
                                    </h3>
                                    <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        {lastUpdated}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSync}
                                        className={`p-2.5 glass rounded-xl transition-all ${isSyncing ? 'text-blue-500 bg-blue-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        <RefreshCcw size={14} className={isSyncing ? 'animate-spin' : ''} />
                                    </button>
                                    <button onClick={() => setIsOpen(false)} className="p-2.5 glass rounded-xl text-slate-400 hover:text-white hover:bg-white/5">
                                        <X size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex bg-black/10 dark:bg-white/5 rounded-2xl p-0.5 mb-6 overflow-x-auto no-scrollbar border border-white/5">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 min-w-[70px] py-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all relative ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                                            }`}
                                    >
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="compactTabActive"
                                                className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{tab}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="max-h-[300px] overflow-y-auto pr-1 compact-scrollbar space-y-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="space-y-4 pb-3"
                                    >
                                        {movies[activeTab].map(movie => (
                                            <div key={movie.id} className="group glass p-4 rounded-2xl border-white/5 hover:border-blue-500/40 transition-all hover:bg-blue-500/5">
                                                <div className="flex justify-between items-start mb-2.5">
                                                    <span className={`text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter ${movie.type === 'Theater' ? 'bg-orange-600/20 text-orange-400 border border-orange-500/20' : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/20'
                                                        }`}>
                                                        {movie.type === 'Theater' ? <Ticket size={8} className="inline mr-1" /> : <Monitor size={8} className="inline mr-1" />}
                                                        {movie.type}
                                                    </span>
                                                    {movie.badge && (
                                                        <span className="text-[8px] font-black bg-blue-600 text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                                                            <Flame size={8} /> {movie.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="font-bold text-xs tracking-tight group-hover:text-blue-400 transition-colors uppercase leading-[1.1]">{movie.title}</h4>
                                                <p className="text-[9px] text-slate-500 font-bold mt-2 uppercase italic tracking-[0.2em] flex justify-between">
                                                    <span>{movie.platform || movie.status || 'Releasing'}</span>
                                                    <span className="text-blue-500/70">{movie.date || movie.status}</span>
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10 flex gap-3">
                                <button className="flex-1 py-4 glass rounded-2xl text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-400 transition-all flex items-center justify-center gap-2">
                                    FULL LIST <Zap size={12} className="fill-current" />
                                </button>
                                <button className="p-4 glass rounded-2xl text-blue-500 hover:bg-blue-500/10 transition-all">
                                    <Sparkles size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .compact-scrollbar::-webkit-scrollbar { width: 3px; }
                .compact-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .compact-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.4);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default MovieHub;
