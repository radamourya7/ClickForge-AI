import React from 'react';
import { motion } from 'framer-motion';

const MemeTicker = () => {
    const memes = [
        "POV: You're an Academic Weapon 🧠💪",
        "GPA goes brrrrrr 📈",
        "Me when Sigma AI handles my assignments: 🧊🥶",
        "POV: You found the secret tool for 4.0 GPA 🤫",
        "Absolute Unit of Productivity 😤",
        "Brain Rot: 0% | Productivity: 100% 🚀",
        "Academic Ri$$ Enabled 💎",
        "No Cap, just high-quality AI 🧢❌",
    ];

    return (
        <div className="w-full bg-blue-600/20 dark:bg-blue-900/40 backdrop-blur-md border-b border-blue-500/20 py-2 overflow-hidden flex whitespace-nowrap z-[60] relative">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex gap-12 items-center px-6"
            >
                {[...memes, ...memes].map((meme, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                        {meme}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default MemeTicker;
