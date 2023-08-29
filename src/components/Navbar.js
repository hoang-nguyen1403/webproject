import { NavLink } from "react-router-dom"
import './Navbar.css'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navbar = ({ cart }) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const [cartCount, setCartCount] = useState(0)
 
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);

    useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);


    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo-img' src='/images/logo.png' />
                    </NavLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-time' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}> Home </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}> About Us </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}> Products </NavLink>
                        </li>
                        {/* <li className='nav-item'>
                            <NavLink to='/cart' className='nav-links' onClick={closeMobileMenu}>Shopping Cart {cartCount}
                                
                            </NavLink>
                        </li>    */}

                    </ul>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };


export default connect(mapStateToProps)(Navbar);

