const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'global',
        unique: true
    },
    visitorCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Stats', StatsSchema);
