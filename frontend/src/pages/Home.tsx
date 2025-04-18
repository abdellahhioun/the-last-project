import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <FeaturedProducts />
            
            {/* Categories Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['Laptops', 'Custom PCs', 'Phones', 'Components'].map((category) => (
                            <div key={category} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-100" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <h3 className="text-2xl font-bold text-white">{category}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">Build Your Dream Setup</h2>
                    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Create your perfect custom PC with our intuitive PC Builder. 
                        Choose from premium components and get expert recommendations.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        Start Building
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
