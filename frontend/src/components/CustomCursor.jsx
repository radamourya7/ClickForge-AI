import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            // Instant movement - no spring lag
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target;
            const isClickable = target.closest('button, a, [role="button"], .cursor-pointer');
            setIsPointer(!!isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Outer Ring - Instant Sync */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[10000] mix-blend-difference hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isPointer ? 1.8 : isClicking ? 0.6 : 1,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full pointer-events-none z-[10001] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isPointer ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
        </>
    );
};

export default CustomCursor;
