import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ToolCard = ({ id, title, description, icon: Icon, badge, colorClass }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), { stiffness: 400, damping: 25 });
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), { stiffness: 400, damping: 25 });

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
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative glass hover-glow rounded-[2rem] p-8 transition-all hover:border-blue-500/60 cursor-pointer overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 transition-colors duration-500"></div>

            {badge && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-rose-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl z-20">
                    {badge}
                </span>
            )}

            <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-2xl bg-gradient-to-br ${colorClass} relative z-10`}
            >
                <Icon size={28} className="text-white drop-shadow-md" />
            </motion.div>

            <h3 className="text-2xl font-black mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-tight text-[var(--text-primary)] relative z-10 leading-none">{title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed line-clamp-2 font-medium relative z-10">{description}</p>

            <Link
                to={`/tool/${id}`}
                className="flex items-center gap-2 text-sm font-black text-blue-500 dark:text-blue-400 hover:gap-3 transition-all w-fit relative z-10 group/btn"
            >
                TRY VIBE <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
};

export default ToolCard;
