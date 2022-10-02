import React, { useState } from 'react'
import './ProductPage.css'
import firstImage from "../../assets/images/image-product-1.jpg"
import secondImage from '../../assets/images/image-product-2.jpg'
import thirdImage from '../../assets/images/image-product-3.jpg'
import fourthImage from '../../assets/images/image-product-4.jpg'
// import firstThumbnail from '../../assets/images/image-product-1-thumbnail.jpg'
// import secondThumbnail from '../../assets/images/image-product-2-thumbnail.jpg'
// import thirdThumbnail from '../../assets/images/image-product-3-thumbnail.jpg'
// import fourthThumbnail from '../../assets/images/image-product-4-thumbnail.jpg'
// import Thumbnails from './Thumbnails'

export default function ProductPage() {


const Thumbnails = [firstImage,  secondImage, thirdImage, fourthImage];

const [selected, setSelected] = useState(Thumbnails[1]);

  return (
    <div className='product-page'>
    
    <img src={selected} alt='' className='images'/>
    {/* <img src={secondImage} alt='' className='images'/>
    <img src={thirdImage} alt='' className='images'/>
    <img src={fourthImage} alt='' className='images'/> */}

    <div className='thumbnails'>
    {Thumbnails.map((img, index)=> (
    <img style={{border: selected === img ? "2px solid orange" : ""}} 
    src={img} 
    alt='' 
    key={index} 
    className='images-thumbnail' 
    onClick={() => setSelected(img)}
    />
     ))}
    </div>
    </div>
    
  
  )
}
