import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx';
import Products from './components/pages/Products.jsx';
import Pant from './components/Pant';
import Tshirt from './components/Tshirt';
import Footer from './components/Footer';
import ProductsPant from './components/pages/ProductPants';
import ProductView from './components/pages/ProductView';
import Cart from './components/Cart/Cart';
import { connect } from "react-redux";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} /> 
            <Route path="/products" element={<Products/>} />
            <Route path="/pants" element={<Pant/>} />
            <Route path="/tshirt" element={<Tshirt/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products/pant" element={<ProductsPant />}/>
            <Route path="/products/tshirt" element={<Products />}></Route>
            <Route path="/products/tshirt/:name" element={<ProductView/>}></Route>
      </Routes>
      <Footer/>
  </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
