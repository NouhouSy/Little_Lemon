import React from 'react';

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$7.99",
      description: "Our bruschetta is made from homemade bread that has been smeared with garlic.",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Grilled Fish",
      price: "$20.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">ORDER FOR DELIVERY!</h2>
        </div>
        {/* Category Tabs */}
        <div className="flex space-x-4 mb-8 border-b overflow-x-auto">
          <button className="pb-2 px-4 border-b-2 border-yellow-500 font-medium whitespace-nowrap">Lunch</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Mains</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Desserts</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">A La Carte</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Specials</button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-yellow-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="text-yellow-600 font-medium hover:text-yellow-700">
                  Order for delivery →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;