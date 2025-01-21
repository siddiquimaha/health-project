
import './App.css';
import Benefit from './components/Benefit';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Tittle from './components/Tittle';
import Work from './components/Work';
import Formula from './components/Formula';
import Oneformula from './components/Oneformula';
import Products from './components/Products';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (name, price) => {
    const newItem = { name, price };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <div className="App">
      <Header cartItems={cartItems}/>
      <Tittle/>
      <Counter/>
      <Work/>
      <Benefit/>
      <Formula/>
      <Oneformula/>
      <Products onAddToCart={handleAddToCart}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
