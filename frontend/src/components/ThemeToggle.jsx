import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors flex items-center justify-center text-slate-400 hover:text-white"
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <Sun size={20} className="text-amber-400" />
            ) : (
                <Moon size={20} className="text-blue-600" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
