import React, { useContext, useState } from 'react'
import './Lightbox.css'
import firstImage from "../../assets/images/image-product-1.jpg"
import secondImage from '../../assets/images/image-product-2.jpg'
import thirdImage from '../../assets/images/image-product-3.jpg'
import fourthImage from '../../assets/images/image-product-4.jpg'
import closeBtn from '../../assets/images/icon-close.svg'
import nextBtn from '../../assets/images/icon-next.svg'
import previousBtn from '../../assets/images/icon-previous.svg'
import { lightContext } from '../Contexts/LightboxContext'
import { useEffect } from 'react'


export default function ProductPage() {

const {showLightbox, setShowLightbox} = useContext(lightContext)
const Thumbnails = [firstImage,  secondImage, thirdImage, fourthImage];
const [currentIndex, setCurrentIndex] = useState(0)
const [selected, setSelected] = useState(Thumbnails);

const showSlides =  () => {
    if (currentIndex > 3) { setCurrentIndex(0)}    
    if (currentIndex < 0) { setCurrentIndex(3)}
  }

  useEffect(() => {
    showSlides();
  }, [currentIndex])

const previousButton = () =>{
    setCurrentIndex(currentIndex - 1);
    
}

const nextButton = () =>{
    setCurrentIndex(currentIndex + 1)
}

  return (
    <div className='light-box'>
    <img src={closeBtn} alt='' className='closeBtn' onClick={()=> setShowLightbox(!showLightbox)}/>
    <img src={previousBtn} alt='' className='previousBtn' onClick={previousButton} />
    <img src={selected[currentIndex]} alt='' className='images' />
    <img src={nextBtn} alt='' className='nextBtn' onClick={nextButton} />
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