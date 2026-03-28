import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ToolCard = ({ id, title, description, icon: Icon, badge, colorClass }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 hover:bg-white/10"
        >
            {badge && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                    {badge}
                </span>
            )}

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${colorClass}`}>
                <Icon size={24} className="text-white" />
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm mb-6 line-clamp-2">{description}</p>

            <Link
                to={`/tool/${id}`}
                className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-all border-b border-transparent hover:border-blue-400 w-fit"
            >
                Try it Now <ChevronRight size={16} />
            </Link>
        </motion.div>
    );
};

export default ToolCard;
