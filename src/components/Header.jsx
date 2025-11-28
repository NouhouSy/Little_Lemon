import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍋</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yellow-600">Little Lemon</h1>
              <p className="text-sm text-gray-600">Chicago</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-yellow-600 font-medium">Menu</a>
            <a href="#reservations" className="text-gray-700 hover:text-yellow-600 font-medium">Reservations</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
          </nav>

          {/* Cart Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-yellow-600">Home</a>
            <a href="#menu" className="block py-2 text-gray-700 hover:text-yellow-600">Menu</a>
            <a href="#reservations" className="block py-2 text-gray-700 hover:text-yellow-600">Reservations</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-yellow-600">About</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;