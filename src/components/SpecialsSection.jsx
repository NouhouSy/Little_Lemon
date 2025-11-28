import React from 'react';

const SpecialsSection = () => {
  const specials = [
    {
      id: 1,
      title: "Seafood",
      image: "https://images.unsplash.com/photo-1559737558-2f5a37fc2046?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Desserts",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Greek Specials",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Specials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specials.map(special => (
            <div key={special.id} className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{special.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition">
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;