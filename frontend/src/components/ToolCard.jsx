import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ToolCard = ({ id, title, description, icon: Icon, badge, colorClass }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { stiffness: 400, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { stiffness: 400, damping: 30 });

    const shineX = useSpring(useTransform(mouseX, [-100, 100], ["0%", "100%"]));
    const shineY = useSpring(useTransform(mouseY, [-100, 100], ["0%", "100%"]));

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1200 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative glass rounded-[2.5rem] p-10 transition-all hover:border-blue-500/40 cursor-pointer overflow-hidden"
        >
            {/* Dynamic Shine Effect */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.15) 0%, transparent 80%)`,
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/10 group-hover:to-emerald-500/5 transition-colors duration-700"></div>

            {badge && (
                <span className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-20 text-white">
                    {badge}
                </span>
            )}

            <motion.div
                whileHover={{ rotate: [-5, 5, -5], scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-2xl bg-gradient-to-br ${colorClass} relative z-10 transition-transform`}
            >
                <Icon size={32} className="text-white drop-shadow-lg" />
            </motion.div>

            <h3 className="text-3xl font-black mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tighter text-[var(--text-primary)] relative z-10 leading-none antialiased">
                {title}
            </h3>
            <p className="text-[var(--text-secondary)] text-base mb-10 leading-relaxed line-clamp-2 font-bold relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                {description}
            </p>

            <Link
                to={`/tool/${id}`}
                className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-color)] rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:gap-5 hover:pr-8 active:scale-95 shadow-xl hover:shadow-blue-500/20"
            >
                TRY VIBE <ChevronRight size={18} className="transition-transform" />
            </Link>
        </motion.div>
    );
};

export default ToolCard;

