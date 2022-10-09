import { useContext, useState } from 'react';
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
        <div style={{display: 'flex',  justifyContent: 'center', gap: '5px'}}>
        <ProductPage/> 
        {showLightbox && <Lightbox style={{height: '100%'}}/>}
        <ProductSummary/>
        </div>
    </ButtonContext>
    </div>
  );
}

export default App;
