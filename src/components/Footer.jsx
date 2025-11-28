import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
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

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Doormat Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#reservations" className="hover:text-white">Reservations</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Chicago Street</li>
              <li>Chicago, IL 60601</li>
              <li>Phone: (312) 555-0123</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>

          {/* Social Links */}
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

export default Footer;