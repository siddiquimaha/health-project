import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/iconcartjpeg.jpeg';
// import burgerIcon from '../assets/linesIcon.png';
import { cartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(cartContext);
  // const totalItems = cartItems.length;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    console.log('menu clicked')
    setNavMenu(!isNavMenu);
  
  }
  let openCart = () => setIsModalOpen(true);
  let closeCart = () => setIsModalOpen(false); 
console.log(cart);
  let totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>

    <nav className="navbar">
        <div className="maindiv">
            <ul className={`nav-menu ${isNavMenu ? 'open' : ''} left-menu`}>
              <li><a href="#" className="nav-link active">Home</a></li>
              <li><a href="#" className="nav-link">Health</a></li>
              <li><Link to={'about-us'} className="nav-link">About Us</Link></li>
              <li><a href="#package-sec" className="nav-link">Shop</a></li>
            </ul>
            <div className="logo">
                <span>CDS</span><span className="highlight">22</span><span className="italic">-formula</span>
            </div>
            <ul className={`nav-menu ${isNavMenu ? 'open' : ''} right-menu`}>
              <li><a href="#" className="nav-link">wish-list</a></li>
              <li><a href="#contact-sec" className="nav-link">Contact Us</a></li>
              <li><Link to={'add-products'} className='nav-link'>Products</Link></li>
              <li className="toggleclose-btn" onClick={toggleMenu}>&times;</li>
            </ul>
            <div id="cart-section" className="icon-container" onClick={openCart}>
                <img src={cartIcon} alt="" height="40px"/>
                <span id="cartbadge" className="cart-badge">{cart.length}</span>
            </div>
            <button className='hamburger-menu' onClick={toggleMenu}>&#9776;</button>
            {/* <div className='hamburger-menu' onClick={toggleMenu}>&#9776;
              <img src={burgerIcon} alt="" />
            </div> */}
        </div>
    </nav>


    {/* script for cart pop up open
    <div id="cart-modal" class="modal">
    <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>Your Cart</h2>
        <div id="cart-items">
        </div>
        <p id="total-price">Total Price: $0</p>
    </div>
</div>
    */}
      {isModalOpen && (
        <div id="cart-modal" className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeCart}>&times;</span>
            <h2>Your Cart</h2>
            <div id="cart-items">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <p key={index}>{item.name} - ${item.price}</p> 
                ))
              )}
            </div>
            <p>Total price of all items are : ${totalPrice}</p>
          </div>
        </div>
      )}
    </>
  );
}
