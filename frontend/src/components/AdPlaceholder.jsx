import { useEffect } from 'react';

const AdPlaceholder = ({ type = 'banner' }) => {
    // Mock Adsterra implementation
    // In a real scenario, you'd paste your Adsterra script here
    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4 bg-white/5 rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center min-h-[200px]">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Advertisement</span>
            <div className="bg-slate-800/50 w-full h-[150px] flex items-center justify-center rounded-lg italic text-slate-600">
                Adsterra {type === 'banner' ? 'Banner' : 'Native'} Ad Slot
            </div>
        </div>
    );
};

export default AdPlaceholder;
