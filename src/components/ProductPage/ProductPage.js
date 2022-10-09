import React, { useContext, useEffect, useState } from 'react'
import './ProductPage.css'
import firstImage from "../../assets/images/image-product-1.jpg"
import secondImage from '../../assets/images/image-product-2.jpg'
import thirdImage from '../../assets/images/image-product-3.jpg'
import fourthImage from '../../assets/images/image-product-4.jpg'
import previousBtn from '../../assets/images/icon-previous.svg'
import nextBtn from '../../assets/images/icon-next.svg'

import { lightContext } from '../Contexts/LightboxContext'

export default function ProductPage() {


const Thumbnails = [firstImage,  secondImage, thirdImage, fourthImage];
const [currentIndex, setCurrentIndex] = useState(0)
const [selected, setSelected] = useState(Thumbnails);
const {showLightbox, setShowLightbox} = useContext(lightContext);

const showSlides =  () => {
  if (currentIndex > 3) { setCurrentIndex(0)}    
  if (currentIndex < 0) { setCurrentIndex(3)}
}

useEffect( () => {
  showSlides();
}, [currentIndex])

const previousButton = () =>{
  setCurrentIndex(currentIndex - 1);
  
}

const nextButton = () =>{
  setCurrentIndex(currentIndex + 1)
}

  return (
    <div className='product-page'>
    {/* <img src={previousBtn} alt='' className='previous-btn'/> */}
   <div className='buttons'>
   <img src={previousBtn} alt='' className='previous-btn' onClick={previousButton}/>
    <img src={nextBtn} alt='' className='next-btn' onClick={nextButton}/>
   </div>
   
    <img src={selected[currentIndex]} alt='' className='images' onClick={() => setShowLightbox(!showLightbox)}/>
  
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
    onClick={() => setSelected(selected(setCurrentIndex(index)))}
    />
     ))}
    </div>
    </div>
    
  
  )
}
