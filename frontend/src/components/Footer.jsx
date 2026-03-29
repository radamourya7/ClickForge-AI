import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Mail } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 py-20 px-6 mt-20 bg-black/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
                        <div className="bg-gradient-to-tr from-blue-600 to-emerald-500 p-2 rounded-xl">
                            <Zap size={20} className="text-white fill-current" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter">
                            Sigma <span className="gradient-text italic">AI</span>
                        </span>
                    </Link>
                    <p className="text-[var(--text-secondary)] max-w-sm font-bold leading-relaxed mb-8">
                        Empowering students and creators with high-diff AI tools. No cap, just pure academic weaponry for the next generation.
                    </p>
                    <div className="flex gap-4">
                        {[Github, Twitter, Mail].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-blue-500 transition-colors"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-6 text-[var(--text-primary)]">Quick Links</h4>
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm font-bold">
                        <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
                        <li><a href="/#ai-tools" className="hover:text-blue-500 transition-colors">AI Tools</a></li>
                        <li><a href="/#student-tools" className="hover:text-blue-500 transition-colors">Student Hub</a></li>
                        <li><a href="/#viral-tools" className="hover:text-blue-500 transition-colors">Viral Generators</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-6 text-[var(--text-primary)]">Legal</h4>
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm font-bold">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-[var(--text-secondary)] text-xs font-bold tracking-widest uppercase opacity-50">
                    &copy; {new Date().getFullYear()} Sigma AI. Built for the high-diff student.
                </div>
                <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Live Status</span>
                    <VisitorCounter />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

