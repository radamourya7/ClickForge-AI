import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Flame } from 'lucide-react';
import api from '../utils/api';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await api.get('/stats/visitors');
                setCount(response.data.count);
            } catch (err) {
                console.error('Failed to fetch visitor count');
                // Mock count if API fails during local dev without DB
                setCount(1337);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    // Format number with commas
    const formattedCount = count.toLocaleString();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 glass px-8 py-3 rounded-full border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all group"
        >
            <div className="relative">
                <Users size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Academic Weapons Recruited:</span>
                {loading ? (
                    <div className="w-8 h-4 bg-white/5 animate-pulse rounded"></div>
                ) : (
                    <motion.span
                        key={count}
                        initial={{ scale: 1.2, color: '#60a5fa' }}
                        animate={{ scale: 1, color: '#f8fafc' }}
                        className="text-sm font-black tracking-tighter text-white font-mono"
                    >
                        {formattedCount}
                    </motion.span>
                )}
            </div>

            <div className="flex items-center gap-1.5 ml-2 pl-4 border-l border-white/10">
                <Flame size={14} className="text-orange-500 fill-orange-500/20 group-hover:animate-bounce" />
                <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Viral</span>
            </div>
        </motion.div>
    );
};

export default VisitorCounter;
