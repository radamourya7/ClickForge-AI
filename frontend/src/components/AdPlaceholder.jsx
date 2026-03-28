import { useEffect } from 'react';

const AdPlaceholder = ({ type = 'banner' }) => {
    /**
     * ADSTERRA INTEGRATION TIP:
     * 1. Go to Adsterra Dashboard -> Websites -> Add new website.
     * 2. Choose the ad format (Native or 728x90 Banner).
     * 3. Copy the script code Adsterra gives you.
     * 4. Paste the script INSIDE the return <div> below.
     *    (Note: For React, you may need to use a script injector or 
     *     dangerouslySetInnerHTML for complex scripts).
     */

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4 bg-white/5 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center min-h-[250px] overflow-hidden">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-4">Sponsored Advertisement</span>

            {/* PASTE YOUR ADSTERRA SCRIPT CODE HERE */}
            <div className="bg-slate-800/30 w-full h-[180px] flex items-center justify-center rounded-2xl italic text-slate-600 text-sm">
                Adsterra {type === 'banner' ? 'Banner (728x90)' : 'Native (4x1)'} Slot
            </div>
        </div>
    );
};

export default AdPlaceholder;
