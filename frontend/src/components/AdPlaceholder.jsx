import { useEffect } from 'react';

const AdPlaceholder = ({ type = 'banner' }) => {
    useEffect(() => {
        const container = document.getElementById(`ad-container-${type}`);
        if (!container) return;
        container.innerHTML = '';

        const script = document.createElement('script');
        if (type === 'banner') {
            const isMobile = window.innerWidth < 768;
            const adKey = isMobile ? '5c095d65f38e94ccda241aca78115d5d' : 'e83b22661e2a8faf3efb2965088039ff';
            const adWidth = isMobile ? 320 : 728;
            const adHeight = isMobile ? 50 : 90;

            const atOptionsScript = document.createElement('script');
            atOptionsScript.innerHTML = `
                atOptions = {
                    'key' : '${adKey}',
                    'format' : 'iframe',
                    'height' : ${adHeight},
                    'width' : ${adWidth},
                    'params' : {}
                };
            `;
            container.appendChild(atOptionsScript);
            script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        } else {
            script.async = true;
            script.dataset.cfasync = "false";
            script.src = "https://pl29004367.profitablecpmratenetwork.com/63dc6ca2f5691f8a7f3a307e0aa569a3/invoke.js";

            const nativeDiv = document.createElement('div');
            nativeDiv.id = "container-63dc6ca2f5691f8a7f3a307e0aa569a3";
            container.appendChild(nativeDiv);
        }
        container.appendChild(script);
    }, [type]);

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4 bg-white/5 rounded-3xl border border-dashed border-white/20 flex flex-col items-center justify-center min-h-[150px] overflow-hidden">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-4">Sponsored Advertisement</span>
            <div id={`ad-container-${type}`} className="w-full flex justify-center"></div>
        </div>
    );
};

export default AdPlaceholder;
