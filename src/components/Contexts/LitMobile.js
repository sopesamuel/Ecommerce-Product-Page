import { useState } from 'react'
import { createContext } from 'react'
import React from 'react'

export const lightMobile = createContext();

export default function LitMobile({children}) {

   const [litMobile, setLitMobile] = useState(false)
   const data = {litMobile, setLitMobile}

  return (
    <div>
        <lightMobile.Provider value={data}>
            {children}
        </lightMobile.Provider>
    </div>
  )
}


