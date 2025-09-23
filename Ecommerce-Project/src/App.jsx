import axios from 'axios'
import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrderPage } from './Pages/OrderPage'
import { TrackingPage } from './Pages/TrackingPage'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [cart, setCart] = useState([]); 

      useEffect(() => {
             axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data)
      });
      }, [])
     

  return (
    <Routes>
    <Route index element={ <HomePage  cart={cart} />}  />
    <Route path='checkout' element={ <CheckoutPage cart={cart} />} />
    <Route path='Orders' element={ <OrderPage />} />
    <Route path='Tracking' element={ <TrackingPage />} />
    </Routes>
   
  )
}

export default App
