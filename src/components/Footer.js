import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          21 SALVADOR
        </h1>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/about'>Contact</Link>
            <Link to='/about'>Support</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/21Salvador.Offical'>Facebook</a>
            <a href='https://www.instagram.com/21salvador.clothing/'> Instagram</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img className='logo-img' src='/images/logo.png' />
            </Link>
          </div>
          <small class='website-rights'>21 SALVADOR © 2021</small>
          <div class='social-icons'>
            
            <a class='social-icon-link facebook' href='https://www.facebook.com/21Salvador.Offical'>
              <i class='fab fa-facebook-f' />
              </a>

            <a class='social-icon-link instagram' href='https://www.instagram.com/21salvador.clothing/'><i class='fab fa-instagram' /></a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;