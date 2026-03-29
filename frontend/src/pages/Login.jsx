import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Zap, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background Glows specifically for auth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg glass rounded-[3rem] p-12 md:p-16 relative z-10 border-white/5 shadow-2xl"
            >
                <div className="text-center mb-12">
                    <motion.div
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-2xl mb-8 shadow-2xl shadow-blue-500/20"
                    >
                        <Zap size={40} className="text-white fill-current" />
                    </motion.div>
                    <h1 className="text-4xl font-black mb-4 tracking-tighter text-[var(--text-primary)] uppercase italic bebas">Welcome Back</h1>
                    <p className="text-[var(--text-secondary)] font-bold text-lg opacity-80">Continue your journey with Sigma AI</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                        <label className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-500 transition-colors" size={20} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-xs font-black text-blue-500 uppercase tracking-widest">Password</label>
                            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-blue-500 transition-colors">Forgot?</a>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-500 transition-colors" size={20} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl font-black text-xl text-white transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                        Sign In <ArrowRight size={24} />
                    </motion.button>
                </form>

                <div className="mt-12 text-center">
                    <p className="text-[var(--text-secondary)] font-bold text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:text-blue-400 transition-colors ml-1 font-black uppercase tracking-widest text-xs">
                            Create one for free
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

