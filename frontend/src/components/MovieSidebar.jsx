import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Monitor, Zap, Flame, Ticket } from 'lucide-react';

const MovieSidebar = () => {
    const [activeTab, setActiveTab] = useState('Bollywood');

    const movies = {
        'Bollywood': [
            { id: 1, title: 'Sitaare Zameen Par', type: 'Theater', date: 'April 3', badge: 'AAMIR' },
            { id: 2, title: 'Happy Patel', type: 'OTT', platform: 'Netflix', status: 'April 1', badge: 'COMEDY' },
            { id: 3, title: 'Vadh 2', type: 'OTT', platform: 'Netflix', status: 'April 3' },
            { id: 4, title: 'Chhava', type: 'Theater', date: 'Feb/March', status: 'Running Now' },
        ],
        'Tollywood': [
            { id: 5, title: 'Biker', type: 'Theater', date: 'April 3', badge: 'ACTION' },
            { id: 6, title: 'Dacoit', type: 'Theater', date: 'April 10', badge: 'HYPED' },
            { id: 7, title: 'Peddi', type: 'Theater', date: 'April 30', badge: 'POWER' },
            { id: 8, title: 'Raakaasaa', type: 'OTT', platform: 'Netflix', status: 'April 3' },
        ],
        'Hollywood': [
            { id: 9, title: 'The Super Mario Galaxy Movie', type: 'Theater', date: 'April 1', badge: 'MUST' },
            { id: 10, title: 'Project Hail Mary', type: 'Theater', date: 'March 20', status: 'Running Now' },
            { id: 11, title: 'Michael (MJ Biopic)', type: 'Theater', date: 'April 24', badge: 'KING' },
            { id: 12, title: 'Bloodhounds S2', type: 'OTT', platform: 'Netflix', status: 'April 3' },
        ],
        'Kollywood': [
            { id: 13, title: 'Vidiyal', type: 'Theater', date: 'March 30', badge: 'INTENSE' },
            { id: 14, title: 'LIK (Love Insurance Kompany)', type: 'Theater', date: 'April 10', badge: 'ROMCOM' },
            { id: 15, title: 'Chiyaan 63', type: 'Theater', date: 'April 14', badge: 'VIKRAM' },
            { id: 16, title: 'Taxila', type: 'OTT', platform: 'Disney+', status: 'April 10' },
        ]
    };

    const tabs = Object.keys(movies);

    return (
        <aside className="lg:sticky lg:top-24 space-y-8">
            <div className="glass rounded-[2rem] p-6 border-blue-500/20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] pointer-events-none"></div>

                <h3 className="text-2xl font-black italic bebas uppercase mb-6 flex items-center gap-3">
                    <Film className="text-blue-500" /> Movie Hub
                </h3>

                <div className="flex bg-black/5 dark:bg-white/5 rounded-2xl p-1 mb-8 overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 min-w-[80px] py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all relative ${activeTab === tab ? 'text-white' : 'text-slate-500'
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="movieTabActive"
                                    className="absolute inset-0 bg-blue-600 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-4"
                        >
                            {movies[activeTab].map(movie => (
                                <div key={movie.id} className="group relative glass p-4 rounded-2xl border-white/5 hover:border-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${movie.type === 'Theater' ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
                                            }`}>
                                            {movie.type === 'Theater' ? <Ticket size={8} className="inline mr-1" /> : <Monitor size={8} className="inline mr-1" />}
                                            {movie.type}
                                        </span>
                                        {movie.badge && (
                                            <span className="text-[8px] font-black bg-white/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <Flame size={8} className="text-blue-500" /> {movie.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="font-bold text-sm tracking-tight group-hover:text-blue-400 transition-colors uppercase">{movie.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase italic tracking-widest">
                                        {movie.platform ? `${movie.platform} • ${movie.status}` : `${movie.status || 'Releasing'} ${movie.date}`}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                    <button className="w-full py-4 glass rounded-xl text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-blue-400 hover:border-blue-500/20 transition-all flex items-center justify-center gap-2">
                        View Full Schedule <Zap size={14} className="fill-current" />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default MovieSidebar;
