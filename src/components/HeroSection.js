import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from "react-router-dom"


function HeroSection() {
  return (
    <div className='hero-container'>
     <h1 className='display-3 align-top'>21 SALVADOR </h1>
     <p className='display-5'>OFFICALLY IN SAI GON </p>
     <p className='display-5 custom_text'>Let our products to be your best friend </p>

     <Link type="button" class="btn btn-light custom_button btn-lg" to='/products'>Get started now</Link> 

    </div>
  );
}

export default HeroSection;