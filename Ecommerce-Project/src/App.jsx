import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrderPage } from './Pages/OrderPage'
import { TrackingPage } from './Pages/TrackingPage'
import './App.css'

function App() {
  return (
    <Routes>
    <Route index element={ <HomePage />}  />
    <Route path='checkout' element={ <CheckoutPage />} />
    <Route path='Orders' element={ <OrderPage />} />
    <Route path='Tracking' element={ <TrackingPage />} />
    </Routes>
   
  )
}

export default App
