import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Zap, ArrowRight } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register attempt:', formData);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg glass rounded-[3rem] p-12 md:p-16 relative z-10 border-white/5 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "anticipate" }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-2xl mb-8 shadow-2xl shadow-blue-500/20"
                    >
                        <Zap size={40} className="text-white fill-current" />
                    </motion.div>
                    <h1 className="text-4xl font-black mb-4 tracking-tighter text-[var(--text-primary)] uppercase italic bebas">Join the Elite</h1>
                    <p className="text-[var(--text-secondary)] font-bold text-lg opacity-80">Unleash your academic weapon today</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">Username</label>
                        <div className="relative group">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-500 transition-colors" size={20} />
                            <input
                                type="text"
                                required
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="johndoe_sigma"
                                className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-500 transition-colors" size={20} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-500 transition-colors" size={20} />
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-14 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl font-black text-xl text-white transition-all flex items-center justify-center gap-3 shadow-xl mt-4"
                    >
                        Get Gains Now <ArrowRight size={24} />
                    </motion.button>
                </form>

                <div className="mt-12 text-center text-sm">
                    <p className="text-[var(--text-secondary)] font-bold">
                        Already a member?{' '}
                        <Link to="/login" className="text-blue-500 hover:text-blue-400 transition-colors ml-1 font-black uppercase tracking-widest text-xs">
                            Sign In
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;

