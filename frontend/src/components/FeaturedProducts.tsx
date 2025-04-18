import React from 'react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Pro Gaming PC',
      category: 'Custom Build',
      price: '$2,499',
      image: '/images/gaming-pc.jpg',
    },
    {
      id: 2,
      name: 'Ultra Laptop',
      category: 'Laptop',
      price: '$1,899',
      image: '/images/laptop.jpg',
    },
    {
      id: 3,
      name: 'Pro Phone',
      category: 'Smartphone',
      price: '$999',
      image: '/images/phone.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our premium selection of tech</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gray-200 animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-indigo-600 mb-1">{product.category}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
