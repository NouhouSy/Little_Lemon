import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">Little Lemon</h2>
            <p className="text-2xl mb-2">Chicago</p>
            <p className="text-lg mb-6 opacity-90">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
              Reserve a table
            </button>
          </div>
          <div className="relative">
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=400&fit=crop" 
                alt="Restaurant dishes"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;