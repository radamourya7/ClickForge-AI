import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Zap } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

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
        // Implementation for backend register
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 glass">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-2xl mb-6 shadow-xl">
                        <Zap size={32} className="text-white fill-current" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-slate-400">Join 10,000+ students and creators</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="text"
                                required
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="johndoe"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all mt-4"
                    >
                        Get Started
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 font-bold hover:underline">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
