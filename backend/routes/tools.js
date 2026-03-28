const express = require('express');
const router = express.Router();
const ToolUsage = require('../models/ToolUsage');

// @route   GET /api/tools
// @desc    Get all tools usage/trending stats
router.get('/', async (req, res) => {
    try {
        const tools = await ToolUsage.find().sort({ clicks: -1 });
        res.json(tools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/tools/click
// @desc    Increment click count for a tool
router.post('/click', async (req, res) => {
    try {
        const { toolName, category } = req.body;
        let tool = await ToolUsage.findOne({ toolName });

        if (tool) {
            tool.clicks += 1;
            tool.lastUsed = Date.now();
            await tool.save();
        } else {
            tool = await ToolUsage.create({ toolName, category, clicks: 1 });
        }

        res.json(tool);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const { generateAIResult } = require('../controllers/aiController');

// @route   POST /api/tools/ai
// @desc    Generate AI results via Gemini
router.post('/ai', generateAIResult);

module.exports = router;
