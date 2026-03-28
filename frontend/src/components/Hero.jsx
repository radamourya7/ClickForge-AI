import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pt-20 pb-16 overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-8">
                    <Sparkles size={16} /> <span>New: AI Resume Analyzer is out!</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    All-in-One Free <br />
                    <span className="gradient-text">AI & Student Tools</span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Supercharge your productivity with AI-powered notes, resume checkers, and viral content generators. Build for the future of students and creators.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#ai-tools" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                        Explore Tools <ArrowRight size={20} />
                    </a>
                    <a href="/register" className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        Premium Upgrade
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
