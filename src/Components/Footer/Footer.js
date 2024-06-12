import React from 'react';
import './Footer.css'; // Импортируем файл стилей

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>I'm [your name or nickname], a passionate enthusiast of [your area of interest or profession]. Here, I share my thoughts, ideas, and experiences in the realm of [your expertise]. My aim is to inspire, educate, and support anyone seeking new knowledge and ideas.!</p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About</a></li> Добавлен новый раздел
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i>Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
