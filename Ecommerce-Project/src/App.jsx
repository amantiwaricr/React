import axios from 'axios'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage'
import { OrderPage } from './Pages/order/OrderPage'
import { TrackingPage } from './Pages/TrackingPage'
import { useEffect, useState } from 'react'
import { HomePage } from './Pages/Home/HomePage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

     const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data)
    };

  useEffect(() => {
   loadCart();
  }, [])


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path='Orders' element={<OrderPage cart={cart} />} />
      <Route path='Tracking' element={<TrackingPage />} />
    </Routes>

  )
}

export default App
