import React, { useState } from 'react'
import './ProductSummary.css'
import plus from '../../assets/images/icon-plus.svg'
import minus from '../../assets/images/icon-minus.svg'
import cartIcon from '../../assets/images/icon-cart.svg'

export default function ProductSummary() {

  const [number, setNumber] = useState(0)

  const AddCart = () =>{
    
  }
  return (
    <div className='product-summary'>
    <p className='prd-sum-title'>SNEAKER COMPANY</p>
    <h3>Fall Limited Edition Sneakers</h3>
    <p className='prd-sum-par'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
    <div className='price-discount'>
    <p>$125.00</p> <h5>50%</h5>
    </div>
    <h4>$250.00</h4>
    <div className='numbers-submit'>
      <div className='plus-minus'>
      <img src={minus} className='minus'/>
      {number}
      <img src={plus} className='plus'/>
      </div>
      <div className='AddCart' onClick={AddCart()}>
     <img src={cartIcon} />
     <p>Add to Cart</p>
      </div>
    </div>
    </div>
  )
}
