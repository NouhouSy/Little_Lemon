import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <nav>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/highlights">Highlights</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;