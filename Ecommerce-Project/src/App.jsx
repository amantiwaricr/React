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

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data)
    }
   fetchAppData();
  }, [])


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='Orders' element={<OrderPage cart={cart} />} />
      <Route path='Tracking' element={<TrackingPage />} />
    </Routes>

  )
}

export default App
