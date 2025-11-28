import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Little Lemon</h2>
            <p className="text-xl mb-4 text-gray-700">Chicago</p>
            <p className="text-gray-600 leading-relaxed">
              Little Lemon is a family-owned Mediterranean restaurant that brings the authentic flavors 
              of the Mediterranean to Chicago. Our recipes have been passed down through generations, 
              and we take pride in serving traditional dishes with a modern twist. Every dish is prepared 
              with love and the finest ingredients to ensure an unforgettable dining experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop" 
              alt="Restaurant interior"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300&h=300&fit=crop" 
              alt="Chef cooking"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;