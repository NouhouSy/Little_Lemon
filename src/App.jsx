import React, { useState } from 'react';

const Header = ({ setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍋</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yellow-600">Little Lemon</h1>
              <p className="text-sm text-gray-600">Chicago</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-yellow-600 font-medium">Home</button>
            <a href="#menu" className="text-gray-700 hover:text-yellow-600 font-medium">Menu</a>
            <button onClick={() => handleNavClick('reservations')} className="text-gray-700 hover:text-yellow-600 font-medium">Reservations</button>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => handleNavClick('home')} className="block py-2 text-gray-700 hover:text-yellow-600 w-full text-left">Home</button>
            <a href="#menu" className="block py-2 text-gray-700 hover:text-yellow-600">Menu</a>
            <button onClick={() => handleNavClick('reservations')} className="block py-2 text-gray-700 hover:text-yellow-600 w-full text-left">Reservations</button>
            <a href="#about" className="block py-2 text-gray-700 hover:text-yellow-600">About</a>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = ({ setCurrentPage }) => {
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
            <button 
              onClick={() => setCurrentPage('reservations')}
              className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
            >
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
        
        <div className="flex space-x-4 mb-8 border-b overflow-x-auto">
          <button className="pb-2 px-4 border-b-2 border-yellow-500 font-medium whitespace-nowrap">Lunch</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Mains</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Desserts</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">A La Carte</button>
          <button className="pb-2 px-4 text-gray-600 hover:text-gray-900 whitespace-nowrap">Specials</button>
        </div>

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

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: "Sarah M.", rating: 5, review: "Amazing food and great atmosphere!" },
    { id: 2, name: "John D.", rating: 5, review: "Best Mediterranean food in Chicago!" },
    { id: 3, name: "Emma L.", rating: 5, review: "Absolutely loved the Greek salad!" },
    { id: 4, name: "Mike R.", rating: 5, review: "Family-friendly and delicious!" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-pink-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-3">{testimonial.review}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍋</span>
              </div>
              <h3 className="text-xl font-bold">Little Lemon</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Mediterranean restaurant in Chicago serving authentic dishes with a modern twist.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Doormat Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#reservations" className="hover:text-white">Reservations</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Chicago Street</li>
              <li>Chicago, IL 60601</li>
              <li>Phone: (312) 555-0123</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links to Social Media</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#facebook" className="hover:text-white">Facebook</a></li>
              <li><a href="#instagram" className="hover:text-white">Instagram</a></li>
              <li><a href="#twitter" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    
    console.log('Reservation submitted:', formData);
    alert(`Reservation confirmed!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`);
    
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '400px', gap: '20px' }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div>
        <label htmlFor="res-date" className="block text-gray-700 font-medium mb-2">
          Choose date
        </label>
        <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div>
        <label htmlFor="res-time" className="block text-gray-700 font-medium mb-2">
          Choose time
        </label>
        <select 
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
          Number of guests
        </label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div>
        <label htmlFor="occasion" className="block text-gray-700 font-medium mb-2">
          Occasion
        </label>
        <select 
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input 
        type="submit" 
        value="Make Your reservation"
        className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition cursor-pointer"
      />
    </form>
  );
};

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Reserve a Table</h1>
          <p className="text-center text-gray-600 mb-8">
            Book your table at Little Lemon and enjoy an unforgettable Mediterranean dining experience.
          </p>
          
          <div className="flex justify-center">
            <BookingForm />
          </div>
          
          <div className="mt-12 bg-teal-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Reservation Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>• Reservations are held for 15 minutes past the booking time</li>
              <li>• For parties larger than 10, please call us directly</li>
              <li>• Cancellations must be made 24 hours in advance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'reservations':
        return <BookingPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <MenuSection />
            <SpecialsSection />
            <TestimonialsSection />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;