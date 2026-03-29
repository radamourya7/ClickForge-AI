import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToolDetails from './pages/ToolDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import AIDirectory from './pages/AIDirectory';
import WarRoom from './pages/WarRoom';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import SchemaSource from './components/SchemaSource';
import MovieHub from './components/MovieHub';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/tool/:toolId" element={<PageWrapper><ToolDetails /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
                <Route path="/ai-world" element={<PageWrapper><AIDirectory /></PageWrapper>} />
                <Route path="/war-room" element={<PageWrapper><WarRoom /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: -10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="noise-bg" />
                <SchemaSource />
                <CustomCursor />
                <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] flex flex-col transition-colors duration-500 relative overflow-hidden">
                    {/* Dynamic Background Glows */}
                    <div className="glow-blob top-[-5%] left-[-5%] opacity-10 dark:opacity-20 translate-x-[-10%] translate-y-[-10%]" />
                    <div className="glow-blob bottom-[-5%] right-[-5%] opacity-10 dark:opacity-20 translate-x-[10%] translate-y-[10%]" style={{ animationDelay: '-10s' }} />

                    <Navbar />
                    <main className="flex-grow z-10">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </div>
                <MovieHub />
            </Router>
        </ThemeProvider>
    );
}

export default App;

