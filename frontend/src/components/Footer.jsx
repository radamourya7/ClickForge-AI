import VisitorCounter from './VisitorCounter';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 px-6 mt-20 bg-slate-950">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">ClickForge AI</h3>
                    <p className="text-slate-400 max-w-sm">
                        Empowering students and creators with free AI-powered tools and utilities to forge a better future.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/#ai-tools" className="hover:text-white">AI Tools</a></li>
                        <li><a href="/#student-tools" className="hover:text-white">Student Hub</a></li>
                        <li><a href="/#viral-tools" className="hover:text-white">Viral Generators</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-white">Company</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-xs">
                    &copy; {new Date().getFullYear()} ClickForge AI. All rights reserved.
                </div>
                <VisitorCounter />
            </div>
        </footer>
    );
};

export default Footer;
