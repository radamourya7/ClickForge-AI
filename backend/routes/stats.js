const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');

// GET /api/stats/visitors - Increments and returns visitor count
router.get('/visitors', async (req, res) => {
    try {
        // Find the global counter, create if doesn't exist, and increment by 1
        const stats = await Stats.findOneAndUpdate(
            { name: 'global' },
            { $inc: { visitorCount: 1 } },
            { new: true, upsert: true }
        );
        res.json({ count: stats.visitorCount });
    } catch (err) {
        console.error('Error fetching/updating visitor count:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
