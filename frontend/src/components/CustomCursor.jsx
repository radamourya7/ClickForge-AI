import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring settings for organic movement
    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);

            const target = e.target;
            const isClickable = target.closest('button, a, [role="button"], .cursor-pointer, input, textarea');
            setIsPointer(!!isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
            {/* Main Cursor Ring */}
            <motion.div
                className="absolute top-0 left-0 w-10 h-10 border-2 border-white rounded-full mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Inner Dot */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isPointer ? 0 : 1,
                }}
            />

            {/* Glow Trail (Optional but "Next Level") */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
};

export default CustomCursor;

