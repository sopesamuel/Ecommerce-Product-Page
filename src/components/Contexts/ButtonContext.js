import React, { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()


export default function ButtonContext({children}) {

    const [cartNumber, setCartNumber] = useState(0)
   

    const data = {cartNumber, setCartNumber}
   

  return (
    <UserContext.Provider value={data}>
    {children}
    </UserContext.Provider>
  )
  
}
