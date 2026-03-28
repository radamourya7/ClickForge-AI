const mongoose = require('mongoose');

const ToolUsageSchema = new mongoose.Schema({
    toolName: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    lastUsed: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['AI', 'Viral', 'Utility', 'Student'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ToolUsage', ToolUsageSchema);
