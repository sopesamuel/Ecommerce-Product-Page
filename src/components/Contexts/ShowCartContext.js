import React, { useState } from 'react'
import { createContext } from 'react'

export const showContext = createContext()

export default function ShowCartContext({children}) {

    const [showCart, setShowCart] = useState(false)

    const data = {showCart, setShowCart}

  return (
    <div>
        <showContext.Provider value={data}>
        {children}
        </showContext.Provider>
    </div>
  )
}
