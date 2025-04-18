import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const ApiService = {
    getHello: async () => {
        try {
            const response = await axios.get(`${API_URL}/hello`);
            return response.data;
        } catch (error) {
            console.error('Error fetching hello:', error);
            throw error;
        }
    },

    healthCheck: async () => {
        try {
            const response = await axios.get(`${API_URL}/health`);
            return response.data;
        } catch (error) {
            console.error('Error checking health:', error);
            throw error;
        }
    }
};
