import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    withCredentials: true
});

export const trackToolClick = async (toolName, category) => {
    try {
        await api.post('/tools/click', { toolName, category });
    } catch (err) {
        console.error('Failed to track click:', err);
    }
};

export default api;
