import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="w-full h-full bg-gradient-to-r from-black via-gray-900 to-black absolute inset-0 object-cover">
          {/* Fallback for missing video */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Build Your Perfect Tech
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          Premium laptops, custom PCs, and the latest phones. 
          Crafted for performance, designed for you.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Build Your PC
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            Explore Products
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
