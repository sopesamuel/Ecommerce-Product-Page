import { useContext, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import ButtonContext from './components/Contexts/ButtonContext';
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import ProductSummary from './components/ProductSummary/ProductSummary';
import ShowCartContext, { showContext } from './components/Contexts/ShowCartContext';
import Lightbox from './components/lightbox/Lightbox.js'
import { lightContext } from './components/Contexts/LightboxContext';

function App() {
  const {showCart, setShowCart} = useContext(showContext);
  const {showLightbox, setShowLightbox} = useContext(lightContext)

  return (

    <div className="App">
    <ButtonContext>
    <Navbar />
    {showCart && <Cart /> }
        <div style={{display: 'flex'}}>
        <ProductPage/> 
        {showLightbox && <Lightbox />}
        <ProductSummary/>
        </div>
    </ButtonContext>
    </div>
  );
}

export default App;
