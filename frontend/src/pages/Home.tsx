import React, { useState, useEffect } from 'react';
import { ApiService } from '../services/api.service';

const Home: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const data = await ApiService.getHello();
                setMessage(data.message);
            } catch (error) {
                console.error('Error:', error);
                setMessage('Error loading message');
            }
        };

        fetchMessage();
    }, []);

    return (
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h2>
            <p className="text-gray-600">{message || 'Loading...'}</p>
        </div>
    );
};

export default Home;
