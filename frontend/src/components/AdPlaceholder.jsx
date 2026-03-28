import React, { useEffect } from 'react';

const AdPlaceholder = ({ type = 'banner' }) => {
    useEffect(() => {
        // Mocking the script injection for specific ad types
        // In a real scenario, these would be the Adsterra ids
        try {
            const script = document.createElement('script');
            if (type === 'banner') {
                script.src = "//pl21528628.toprevenuegate.com/eb/73/45/eb734569c73b063e590ca150ca22cd67.js";
            } else if (type === 'native') {
                script.src = "//pl21528657.toprevenuegate.com/08/bc/f2/08bcf267c3bb17e606ea950ca22cd67.js";
            }
            script.async = true;
            document.body.appendChild(script);
        } catch (e) {
            console.error("Ad script loading failed", e);
        }
    }, [type]);

    return (
        <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4 opacity-30">Sponsored Content</span>
            <div className="w-full glass rounded-[2.5rem] border-white/5 overflow-hidden flex items-center justify-center min-h-[150px] relative">
                <div className="absolute inset-0 bg-blue-500/5 blur-[40px] pointer-events-none"></div>
                <div id={`adsterra-${type}`} className="relative z-10 w-full flex justify-center py-6">
                    {/* The Adsterra script will inject the actual ad content here */}
                    <div className="text-xs font-bold text-slate-500 italic uppercase">Ad Loading...</div>
                </div>
            </div>
        </div>
    );
};

export default AdPlaceholder;
