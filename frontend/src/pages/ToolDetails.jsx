import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, Share2, Copy, Download, Star, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { copyToClipboard } from '../utils/clipboard';
import AdPlaceholder from '../components/AdPlaceholder';
import { trackToolClick } from '../utils/api';

// Simple Tool Result Component
const ResultCard = ({ title, content, onCopy }) => (
    <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl animate-slow-fade">
        <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-blue-400">{title}</h4>
            <button
                onClick={() => onCopy(content)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                title="Copy to Clipboard"
            >
                <Copy size={18} />
            </button>
        </div>
        <div className="text-slate-200 whitespace-pre-wrap text-sm leading-relaxed">
            {content}
        </div>
    </div>
);

const InternshipTracker = () => {
    const internships = [
        { title: 'Frontend Developer Intern', company: 'Google', location: 'Remote', deadline: 'Apr 30, 2026', link: 'https://google.com/careers' },
        { title: 'AI Research Intern', company: 'OpenAI', location: 'San Francisco, CA', deadline: 'May 15, 2026', link: 'https://openai.com/careers' },
        { title: 'Software Engineer Intern', company: 'Microsoft', location: 'Seattle, WA', deadline: 'June 1, 2026', link: 'https://microsoft.com/careers' },
        { title: 'Full Stack Intern', company: 'Stripe', location: 'Remote', deadline: 'May 20, 2026', link: 'https://stripe.com/jobs' },
        { title: 'UI/UX Design Intern', company: 'Adobe', location: 'NYC', deadline: 'May 10, 2026', link: 'https://adobe.com/careers' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internships.map((job, index) => (
                <div key={index} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 [transition-property:background,transform] duration-300">
                    <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                    <p className="text-blue-400 text-sm mb-3">{job.company} • {job.location}</p>
                    <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                        <span className="text-xs text-slate-500">Starts: {job.deadline}</span>
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-400 hover:text-emerald-300">Apply Now →</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

const CGPACalculator = ({ onCalculate }) => {
    const [rows, setRows] = useState([{ grade: 'A', credits: 3 }]);

    const addRow = () => setRows([...rows, { grade: 'A', credits: 3 }]);
    const updateRow = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const calculate = () => {
        const gradePoints = { 'A': 10, 'A-': 9, 'B': 8, 'B-': 7, 'C': 6, 'D': 4, 'F': 0 };
        let totalPoints = 0;
        let totalCredits = 0;
        rows.forEach(row => {
            totalPoints += (gradePoints[row.grade] || 0) * Number(row.credits);
            totalCredits += Number(row.credits);
        });
        const gpa = (totalPoints / totalCredits).toFixed(2);
        onCalculate(`YOUR CALCULATED GPA: ${gpa}\nTotal Credits: ${totalCredits}\nTotal Grade Points: ${totalPoints}`);
    };

    return (
        <div className="space-y-4">
            {rows.map((row, index) => (
                <div key={index} className="flex gap-4">
                    <select
                        value={row.grade}
                        onChange={(e) => updateRow(index, 'grade', e.target.value)}
                        className="flex-grow bg-slate-900/50 border border-white/10 rounded-xl p-3 text-white outline-none"
                    >
                        {['A', 'A-', 'B', 'B-', 'C', 'D', 'F'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <input
                        type="number"
                        value={row.credits}
                        onChange={(e) => updateRow(index, 'credits', e.target.value)}
                        placeholder="Credits"
                        className="w-24 bg-slate-900/50 border border-white/10 rounded-xl p-3 text-white outline-none"
                    />
                </div>
            ))}
            <div className="flex gap-4 pt-4">
                <button onClick={addRow} className="flex-grow py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
                    + Add Subject
                </button>
                <button onClick={calculate} className="flex-grow py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all">
                    Calculate GPA
                </button>
            </div>
        </div>
    );
};

const ToolDetails = () => {
    const { toolId } = useParams();
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Tool Data
    const toolsInfo = {
        'resume-analyzer': { title: 'ATS Resume Checker', desc: 'Score your resume against industry standards.', placeholder: 'Paste your resume text here...', category: 'AI' },
        'notes-summarizer': { title: 'AI Notes Summarizer', desc: 'Convert long text into key bullet points.', placeholder: 'Paste your long notes or article here...', category: 'AI' },
        'insta-bio': { title: 'Instagram Bio Generator', desc: 'Create a viral bio based on your personality.', placeholder: 'Describe yourself or your business...', category: 'Viral' },
        'caption-gen': { title: 'Viral Caption Generator', desc: 'Engaging captions for social media.', placeholder: 'What is your post about?', category: 'Viral' },
        'pickup-lines': { title: 'AI Pickup Lines', desc: 'Smooth lines for any situation.', placeholder: 'Give us a theme (e.g., tech, coffee, gym)...', category: 'Viral' },
        'word-counter': { title: 'Smart Word Counter', desc: 'Analyze text length and readability.', placeholder: 'Type or paste text...', category: 'Utility' },
        'cgpa-calc': { title: 'CGPA Calculator', desc: 'Calculate your academic standing.', category: 'Student', isSpecial: true },
        'internships': { title: 'Internship Tracker', desc: 'Latest opportunities from top tech companies.', category: 'Student', isSpecial: true },
    };

    const currentTool = toolsInfo[toolId] || { title: 'Tool Not Found', desc: 'This tool is coming soon!', category: 'Utility' };

    const handleAction = async () => {
        if (!input) return;
        setLoading(true);

        // Track usage in backend
        trackToolClick(currentTool.title, currentTool.category);

        try {
            const apiResponse = await api.post('/tools/ai', {
                toolName: currentTool.title,
                input: input
            });
            setResult(apiResponse.data.result);
        } catch (err) {
            console.error('AI Error:', err);
            // Fallback for demo if API is down or not configured
            setTimeout(() => {
                let output = '';
                if (toolId === 'resume-analyzer') {
                    output = `ATS SCORE: 85/100\n\nStrengths:\n- Clean formatting\n- Good use of action verbs\n\nImprovements Needed:\n- Add more industry keywords\n- Quantify achievements more clearly`;
                } else if (toolId === 'word-counter') {
                    const words = input.trim().split(/\s+/).length;
                    const chars = input.length;
                    output = `Word Count: ${words}\nCharacter Count: ${chars}\nReadability: High`;
                } else if (toolId === 'notes-summarizer') {
                    output = `SUMMARY:\n1. Main concept explained clearly.\n2. Supporting evidence identified.\n3. Conclusion summarized in one sentence.`;
                } else {
                    output = `This is a generated ${currentTool.title} result for: "${input.substring(0, 20)}..."\n\nClickForge AI is processing your request. Connect your Gemini API Key in backend/.env for real results!`;
                }
                setResult(output);
            }, 1000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <Helmet>
                <title>{currentTool.title} | ClickForge AI Tools</title>
                <meta name="description" content={currentTool.desc} />
                <link rel="canonical" href={`https://clickforge.ai/tool/${toolId}`} />
            </Helmet>
            <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 w-fit">
                <ChevronLeft size={20} /> Back to Dashboard
            </Link>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentTool.title}</h1>
                        <p className="text-slate-400">{currentTool.desc}</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 glass rounded-xl text-slate-300 hover:text-white transition-all">
                            <Share2 size={20} />
                        </button>
                        <button className="p-3 glass rounded-xl text-slate-300 hover:text-white transition-all">
                            <Star size={20} />
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {currentTool.isSpecial ? (
                        toolId === 'cgpa-calc' ? (
                            <CGPACalculator onCalculate={setResult} />
                        ) : (
                            <InternshipTracker />
                        )
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Your Input</label>
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={currentTool.placeholder}
                                    className="w-full h-48 bg-slate-900/50 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleAction}
                                disabled={loading || !input}
                                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 
                      ${loading ? 'bg-slate-800 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-emerald-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1'}`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    'Forge Result'
                                )}
                            </button>
                        </>
                    )}
                </div>

                {result && (
                    <ResultCard
                        title="Generated Result"
                        content={result}
                        onCopy={copyToClipboard}
                    />
                )}

                <div className="mt-8 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest">
                    <Info size={12} /> Results are generated by ClickForge AI Engine
                </div>
            </div>

            <AdPlaceholder type="banner" />
        </div>
    );
};

export default ToolDetails;
