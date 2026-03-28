import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToolDetails from './pages/ToolDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import MemeTicker from './components/MemeTicker';
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
                <Route path="/register" element={<PageWrapper><PageWrapper><Register /></PageWrapper></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

function App() {
    return (
        <ThemeProvider>
            <Router>
                <SchemaSource />
                <MemeTicker />
                <CustomCursor />
                <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] flex flex-col transition-colors duration-500 relative overflow-hidden">
                    {/* Background Blobs with Neon colors */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-lime-500/10 dark:bg-pink-600/5 rounded-full blur-[140px] pointer-events-none"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

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
