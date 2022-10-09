import React from 'react'
import './LightboxMobile.css'
import closeBtn from '../../assets/images/icon-close.svg'
import LitMobile, { lightMobile } from '../Contexts/LitMobile'
import { useContext } from 'react'

export default function LightboxMobile() {
    const {litMobile, setLitMobile} = useContext(lightMobile) 

  return (
    <div className='entire-box'>
    <img src={closeBtn} alt='' className='closeBtn' onClick={()=>{setLitMobile(!LitMobile)}}/>
        <ul className='mobile-menu'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
