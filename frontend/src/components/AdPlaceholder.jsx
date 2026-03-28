import React from 'react';

const AdPlaceholder = ({ type = 'banner' }) => {
    // Adsterra keys from URLs
    const key = type === 'banner'
        ? 'eb734569c73b063e590ca150ca22cd67'
        : '08bcf267c3bb17e606ea950ca22cd67';

    // Industry standard for React: Sandboxed iframe with srcDoc
    const adScript = `
        <script type="text/javascript">
            atOptions = {
                'key' : '${key}',
                'format' : 'iframe',
                'height' : ${type === 'banner' ? 90 : 250},
                'width' : ${type === 'banner' ? 728 : 300},
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.toprevenuegate.com/${key}/invoke.js"></script>
    `;

    const srcDoc = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; overflow: hidden; background: transparent; }
                </style>
            </head>
            <body>
                ${adScript}
            </body>
        </html>
    `;

    return (
        <div className="w-full max-w-5xl mx-auto my-16 flex flex-col items-center group">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] mb-4 opacity-40 transition-opacity group-hover:opacity-100">Sponsored Hub</span>
            <div className="w-full glass rounded-[3rem] border-blue-500/10 overflow-hidden flex flex-col items-center justify-center min-h-[150px] relative hover:border-blue-500/30 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                <div className="absolute inset-0 bg-blue-500/5 blur-[40px] pointer-events-none"></div>

                <div className="relative z-10 w-full flex justify-center py-6">
                    <iframe
                        srcDoc={srcDoc}
                        width={type === 'banner' ? "728" : "300"}
                        height={type === 'banner' ? "90" : "250"}
                        style={{ border: 'none', background: 'transparent' }}
                        title={`Adsterra ${type}`}
                        scrolling="no"
                        key={key} // Force remount if key changes
                    />
                </div>

                {/* Viral Background Polish */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            </div>
        </div>
    );
};

export default AdPlaceholder;
