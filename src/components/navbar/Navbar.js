import React, { useContext } from 'react'
import cartIcon from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import './Navbar.css'
import menuBars from "../../assets/images/icon-menu.svg"
import logo from '../../assets/images/logo.svg'
import { UserContext } from '../Contexts/ButtonContext'
import { showContext } from '../Contexts/ShowCartContext'

export default function Navbar() {

  const {cartNumber, setCartNumber} = useContext(UserContext)
  const {showCart, setShowCart} = useContext(showContext);

  return (

  <div className='navbar'>
  <button>
    <img src={menuBars} alt=''/>
  </button>

    <div className="img-text">
        <img src={logo} className="navbar-img" alt=''/>
            <div className="navbar-text">
              <p>Collections</p>
              <p>Men</p>
              <p>Women</p>
              <p>About</p>
              <p>Contact</p>
            </div>
    </div>
    <div className='navbar-asset'>
        <img src={cartIcon} alt='' className="cartIcon" onClick={() => setShowCart(!showCart)}/>
       {cartNumber > 0 && <p>1</p>} 
        <img src={avatar} alt='' className="avatar" />
    </div>
    </div>
  ) 
}
