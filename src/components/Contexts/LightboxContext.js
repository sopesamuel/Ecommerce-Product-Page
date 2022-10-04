import React, { useState } from 'react'
import { createContext } from "react";

export const lightContext = createContext();



export default function LightboxContext({children}) {

    const [showLightbox, setShowLightbox] = useState(false)
    const data = {showLightbox, setShowLightbox}

  return (
    <div>

    <lightContext.Provider value={data}>
    {children}
    </lightContext.Provider>
      
    </div>
  )
}

