const { GoogleGenerativeAI } = require('@google/generative-ai');

const generateAIResult = async (req, res) => {
    try {
        const { toolName, input } = req.body;
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: "You are the Sigma AI Engine, a professional, highly intelligent, and helpful assistant designed for students and creators. Your goal is to provide 'up-to-the-point', viral, and high-quality results. Always maintain a professional yet engaging tone."
        });

        let prompt = '';
        if (toolName === 'ATS Resume Checker') {
            prompt = `As an expert HR and ATS specialist, analyze this resume. 
            1. Provide a definitive ATS Score out of 100.
            2. List 3 major strengths.
            3. Identify critical missing keywords for industry standards.
            4. Suggest 3 specific formatting or content improvements to increase the score.
            
            RESUME TEXT:
            ${input}`;
        } else if (toolName === 'AI Notes Summarizer') {
            prompt = `Transform these notes into a high-quality study guide.
            1. Create a clear, engaging headline.
            2. Provide a 'Executive Summary' (2-3 sentences).
            3. List key headers with detailed bullet points.
            4. Include a 'Key Takeaways' or 'Action Items' section.
            
            NOTES:
            ${input}`;
        } else if (toolName === 'Instagram Bio Generator') {
            prompt = `Generate 3 distinct, viral Instagram bios based on this description. 
            - Option 1: Professional & Clean
            - Option 2: Aesthetic & Moody
            - Option 3: High-Energy & Influencer style
            Use modern emojis, strategic line breaks, and clear Call-to-Actions.
            
            DESCRIPTION:
            ${input}`;
        } else if (toolName === 'Viral Caption Generator') {
            prompt = `Create 5 viral social media captions for this topic. 
            Format each with a 'Hook', 'Value Body', and 'CTA'. 
            Include a mix of trending and niche hashtags.
            
            TOPIC:
            ${input}`;
        } else if (toolName === 'AI Pickup Lines') {
            prompt = `Generate 5 smooth, witty, and high-quality pickup lines about this theme. 
            Ensure they are charming, modern, and absolutely non-offensive.
            
            THEME:
            ${input}`;
        } else if (toolName === 'AI Plagiarism Humanizer') {
            prompt = `As an expert editor and linguist, rewrite the following text to sound $100\%$ human. 
            - Increase 'perplexity' and 'burstiness' by varying sentence lengths and structures.
            - Use natural idioms, occasional soft transitions, and a conversational yet professional tone.
            - Ensure it can bypass AI detection algorithms while maintaining the original meaning perfectly.
            
            ROBOTIC TEXT:
            ${input}`;
        } else if (toolName === 'Sigma Chat') {
            prompt = `You are the primary assistant for the Sigma AI platform. Answer this query professionally and helpfully: ${input}`;
        } else {
            prompt = `Process this request as a specialized module of Sigma AI: ${input}`;
        }

        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_key_here' || !process.env.GEMINI_API_KEY.startsWith('AIza')) {
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
