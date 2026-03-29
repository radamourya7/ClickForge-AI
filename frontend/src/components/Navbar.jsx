import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles, LayoutGrid, Zap, GraduationCap, PenTool, Menu, X, Globe, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MemeTicker from './MemeTicker';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Dashboard', path: '/', icon: LayoutGrid },
        { name: 'AI World', path: '/ai-world', icon: Globe },
        { name: 'AI Tools', path: '/#ai-tools', icon: Sparkles },
        { name: 'Student', path: '/#student-tools', icon: GraduationCap },
        { name: 'Viral', path: '/#viral-tools', icon: PenTool },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -150, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'p-4' : 'p-0'}`}
        >
            <div className={`transition-all duration-300 ${isScrolled ? 'glass rounded-[2rem] border-white/10 shadow-2xl' : 'bg-transparent'}`}>
                {!isScrolled && <MemeTicker />}

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            className="bg-gradient-to-tr from-blue-600 to-emerald-500 p-2 rounded-xl shadow-lg shadow-blue-500/20"
                        >
                            <Zap size={22} className="text-white fill-current" />
                        </motion.div>
                        <span className="text-2xl font-black tracking-tighter">
                            Sigma <span className="gradient-text italic text-white">AI</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex gap-2 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 hover:bg-white/5 ${location.pathname === link.path ? 'text-blue-500 bg-white/5' : 'text-slate-400 hover:text-white transition-colors'}`}
                            >
                                <link.icon size={16} />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link to="/login" className="hidden sm:block text-sm font-black hover:text-blue-500 transition-colors uppercase tracking-widest text-slate-400">
                            Log In
                        </Link>

                        <Link
                            to="/war-room"
                            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-black text-[10px] uppercase tracking-widest animate-pulse-red hover:bg-red-500 hover:text-white transition-all"
                        >
                            <AlertTriangle size={14} /> War Room
                        </Link>

                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-2.5 rounded-xl text-xs font-black text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest shadow-xl"
                        >
                            Get Started
                        </Link>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl rounded-b-[2rem] border-t border-white/5"
                >
                    <div className="flex flex-col p-6 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 font-black uppercase text-xs tracking-widest transition-all text-slate-400 hover:text-white hover:pl-6"
                            >
                                <link.icon size={20} className="text-blue-500" />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

