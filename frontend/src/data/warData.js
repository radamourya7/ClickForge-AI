// Conflict start date: March 1st, 2026
const CONFLICT_START_DATE = new Date('2026-03-01T00:00:00Z');

export const getConflictDay = () => {
    const now = new Date();
    const diffTime = Math.abs(now - CONFLICT_START_DATE);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export const warBriefings = {
    DEFAULT: {
        status: "TIER 1 WATCH",
        location: "MIDDLE EAST TRANSIT ZONE",
        intel: "High-intensity surveillance in progress. Strategic assets deployed to northern sectors.",
        orders: "Maintain defensive posture. Await further tactical data from command center."
    },
    D30: {
        status: "ALERT: CRITICAL ESCALATION",
        location: "TEHRAN - TEL AVIV AXIS",
        intel: "Strategic deep-strike capabilities confirmed. Air defense systems operating at 100% capacity across the border.",
        orders: "Execute containment protocols. Prepare for immediate situational shift. No civilian movement advised in transit zones."
    }
};

export const dailyNews = [
    { id: 1, headline: "Diplomatic efforts stall at UN security council", source: "REUTERS", time: "2h ago", urgency: "High" },
    { id: 2, headline: "Carrier strike group enters eastern mediterranean", source: "NAVY INTEL", time: "4h ago", urgency: "Critical" },
    { id: 3, headline: "Cyber attacks reported on regional infrastructure", source: "AP", time: "5h ago", urgency: "Medium" },
    { id: 4, headline: "Civilian flight paths diverted across Middle East", source: "AL JAZEERA", time: "7h ago", urgency: "High" },
    { id: 5, headline: "Emergency session convened in Brussels over energy security", source: "BBC", time: "8h ago", urgency: "Medium" }
];

export const liveSources = [
    { name: "Al Jazeera Live", url: "https://www.aljazeera.com/live" },
    { name: "BBC News Middle East", url: "https://www.bbc.com/news/world/middle_east" },
    { name: "Reuters Conflict Desk", url: "https://www.reuters.com/world/middle-east" },
    { name: "Live Universal Awareness Map", url: "https://liveuamap.com" }
];

export const tacticalMarkers = [
    { id: 1, name: "Tehran", x: 75, y: 35, type: "primary" },
    { id: 2, name: "Tel Aviv", x: 35, y: 55, type: "primary" },
    { id: 3, name: "Beirut", x: 38, y: 48, type: "secondary" },
    { id: 4, name: "Damascus", x: 42, y: 52, type: "secondary" },
    { id: 5, name: "Hormuz Strait", x: 80, y: 70, type: "strategic" }
];
