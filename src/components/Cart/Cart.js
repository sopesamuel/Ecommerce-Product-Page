import React, { useContext } from 'react'
import '../Cart/Cart.css'
import deleteIcon from '../../assets/images/icon-delete.svg'
import prodcutNail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import { UserContext } from '../Contexts/ButtonContext';
import { showContext } from '../Contexts/ShowCartContext';


export default function Cart() {

    const {cartNumber, setCartNumber} = useContext(UserContext);
    const {showCart, setShowCart} = useContext(showContext);
    // {chartIsOpen ? "basket-wrapper" : "hidden"}


  return (
    <div className={showCart && "basket-wrapper" }>
    <p className="basket-title">Cart</p>
    {cartNumber > 0 ? <div className="cart-item">
            <div className="cart-item-wrapper">
              <img className="cart-item-img" src={prodcutNail1} alt="cart-item"/>
              <div className="cart-item-container">
                <div>
                  <p>Automn Limited Edition...</p>
                </div>
                <p>$125.00 x {cartNumber} = <span>${(cartNumber * 125)}</span></p>
              </div>
              <img  className = "deletedIcon" src={deleteIcon} alt="delete-icon" onClick={() => setCartNumber(cartNumber - 1)}/>
            </div>
            <button className='button'>Checkout</button>
         </div> : 
            <div className="product">
           <p>Your Cart is empty.</p> 
          </div>
    }
    </div>
  )
}


