import { Link } from 'react-router-dom';
import { Sparkles, LayoutGrid, Zap, GraduationCap, PenTool } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 glass border-b px-6 py-4 flex justify-between items-center backdrop-blur-md">
            <Link to="/" className="flex items-center gap-2">
                <div className="bg-gradient-to-tr from-blue-600 to-emerald-500 p-2 rounded-lg">
                    <Zap size={24} className="text-white fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                    Sigma <span className="gradient-text">AI</span>
                </span>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                <Link to="/" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                    <LayoutGrid size={16} /> Dashboard
                </Link>
                <a href="/#ai-tools" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                    <Sparkles size={16} /> AI Tools
                </a>
                <a href="/#student-tools" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                    <GraduationCap size={16} /> Student
                </a>
                <a href="/#viral-tools" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                    <PenTool size={16} /> Viral
                </a>
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link to="/login" className="text-sm font-medium hover:text-blue-500 transition-colors">
                    Login
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 rounded-full text-sm font-semibold text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
