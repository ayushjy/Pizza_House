import '@/styles/globals.css'
import { useState } from 'react'
import Appcontext from '@/components/Appcontext'


export default function App({ Component, pageProps }) {
    const [pizza,setPizza] = useState({base:"",toppings:[]});

  return (
    <Appcontext.Provider value={{pizza,setPizza}}>
      <Component {...pageProps} />
    </Appcontext.Provider>
  )
}
