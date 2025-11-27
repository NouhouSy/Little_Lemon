import React from "react";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/images/logo.png" alt="Little Lemon Logo" className="logo" />

        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/highlights">Highlights</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;