const { GoogleGenerativeAI } = require('@google/generative-ai');

const generateAIResult = async (req, res) => {
    try {
        const { toolName, input } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        let prompt = '';
        if (toolName === 'ATS Resume Checker') {
            prompt = `Analyze the following resume text for ATS compatibility. Provide a score out of 100, identify strengths, and list specific improvements or keywords missing:\n\n${input}`;
        } else if (toolName === 'AI Notes Summarizer') {
            prompt = `Summarize the following notes into a concise bullet-point summary with a main headline:\n\n${input}`;
        } else if (toolName === 'Instagram Bio Generator') {
            prompt = `Create 3 viral and engaging Instagram bios based on this description. Use emojis and modern formatting:\n\n${input}`;
        } else if (toolName === 'Viral Caption Generator') {
            prompt = `Generate 5 engaging captions (viral style) for a social media post about this topic. Include hashtags:\n\n${input}`;
        } else if (toolName === 'AI Pickup Lines') {
            prompt = `Write 5 witty, non-offensive, and smooth pickup lines about this theme:\n\n${input}`;
        } else {
            prompt = `Act as an AI assistant for a student platform called ClickForge AI. Process this request: ${input}`;
        }

        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_key_here') {
            return res.status(200).json({
                message: "SIMULATED RESULT: (Add an API key in .env to see real AI!)",
                result: `Your request for "${toolName}" was received. Once your Gemini API Key is added to the backend .env, real AI results will appear here!`
            });
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ result: text });
    } catch (err) {
        console.error('Gemini AI Error:', err);
        res.status(500).json({ message: 'AI Processing failed, please try again.' });
    }
};

module.exports = { generateAIResult };
